ALTER TABLE `clients_table` ADD `jc` integer;--> statement-breakpoint
ALTER TABLE `clients_table` ADD `jmin` integer;--> statement-breakpoint
ALTER TABLE `clients_table` ADD `jmax` integer;--> statement-breakpoint
ALTER TABLE `clients_table` ADD `s1` integer;--> statement-breakpoint
ALTER TABLE `clients_table` ADD `s2` integer;--> statement-breakpoint
ALTER TABLE `clients_table` ADD `h1` integer;--> statement-breakpoint
ALTER TABLE `clients_table` ADD `h2` integer;--> statement-breakpoint
ALTER TABLE `clients_table` ADD `h3` integer;--> statement-breakpoint
ALTER TABLE `clients_table` ADD `h4` integer;--> statement-breakpoint
ALTER TABLE `interfaces_table` ADD `jc` integer DEFAULT 7 NOT NULL;--> statement-breakpoint
ALTER TABLE `interfaces_table` ADD `jmin` integer DEFAULT 25 NOT NULL;--> statement-breakpoint
ALTER TABLE `interfaces_table` ADD `jmax` integer DEFAULT 1200 NOT NULL;--> statement-breakpoint
ALTER TABLE `interfaces_table` ADD `s1` integer DEFAULT 96 NOT NULL;--> statement-breakpoint
ALTER TABLE `interfaces_table` ADD `s2` integer DEFAULT 68 NOT NULL;--> statement-breakpoint
ALTER TABLE `interfaces_table` ADD `h1` integer DEFAULT 834729847 NOT NULL;--> statement-breakpoint
ALTER TABLE `interfaces_table` ADD `h2` integer DEFAULT 1948573829 NOT NULL;--> statement-breakpoint
ALTER TABLE `interfaces_table` ADD `h3` integer DEFAULT 592847362 NOT NULL;--> statement-breakpoint
ALTER TABLE `interfaces_table` ADD `h4` integer DEFAULT 1847293658 NOT NULL;