import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.hrznhosting.com',
	integrations: [
		starlight({
			title: 'Knowledgebase',
			logo: {
				light: '/src/assets/logo-light.svg',
				dark: '/src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/Horizon-Hosting/documentation',
			},
			sidebar: [{
					label: 'Billing',
					autogenerate: {
						collapsed: true,
						directory: 'billing'
					},
				},
				{
					label: 'General',
					autogenerate: {
						collapsed: true,
						directory: 'general'
					},
				},
				{
					label: 'Garry\'s Mod',
					autogenerate: {
						collapsed: true,
						directory: 'gmod'
					},
				},
				{
					label: 'BeamMP',
					autogenerate: {
						collapsed: true,
						directory: 'beammp'
					},
				},
				{
					label: 'Minecraft',
					autogenerate: {
						collapsed: true,
						directory: 'minecraft'
					},
				},
				{
					label: 'Virtual Private Server',
					autogenerate: {
						collapsed: true,
						directory: 'vps'
					},
				},
				{
					label: 'Legal',
					autogenerate: {
						collapsed: true,
						directory: 'legal'
					},
				}
			],
		}),
	],
});