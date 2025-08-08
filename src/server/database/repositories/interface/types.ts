import type { InferSelectModel } from 'drizzle-orm';
import z from 'zod';
import isCidr from 'is-cidr';
import type { wgInterface } from './schema';

export type InterfaceType = InferSelectModel<typeof wgInterface>;

export type InterfaceCreateType = Omit<
  InterfaceType,
  'createdAt' | 'updatedAt'
>;

export type InterfaceUpdateType = Omit<
  InterfaceCreateType,
  'name' | 'createdAt' | 'updatedAt' | 'privateKey' | 'publicKey'
>;

const device = z
  .string({ message: t('zod.interface.device') })
  .min(1, t('zod.interface.device'))
  .pipe(safeStringRefine);

const cidr = z
  .string({ message: t('zod.interface.cidr') })
  .min(1, { message: t('zod.interface.cidr') })
  .refine((value) => isCidr(value), { message: t('zod.interface.cidrValid') })
  .pipe(safeStringRefine);

export const InterfaceUpdateSchema = schemaForType<InterfaceUpdateType>()(
  z.object({
    ipv4Cidr: cidr,
    ipv6Cidr: cidr,
    mtu: MtuSchema,
    port: PortSchema,
    device: device,
    enabled: EnabledSchema,
    // AmneziaWG parameters
    jc: z.number().int().min(1).max(128).default(7),
    jmin: z.number().int().min(0).max(1500).default(25),
    jmax: z.number().int().min(0).max(1500).default(1200),
    s1: z.number().int().min(0).max(1500).default(96),
    s2: z.number().int().min(0).max(1500).default(68),
    h1: z.number().int().min(1).max(2147483647).default(834729847),
    h2: z.number().int().min(1).max(2147483647).default(1948573829),
    h3: z.number().int().min(1).max(2147483647).default(592847362),
    h4: z.number().int().min(1).max(2147483647).default(1847293658),
  })
);

export type InterfaceCidrUpdateType = {
  ipv4Cidr: string;
  ipv6Cidr: string;
};

export const InterfaceCidrUpdateSchema =
  schemaForType<InterfaceCidrUpdateType>()(
    z.object({
      ipv4Cidr: cidr,
      ipv6Cidr: cidr,
    })
  );
