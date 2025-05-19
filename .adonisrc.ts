import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default {
  name: 'guestbook',
  aceProviders: ['@adonisjs/lucid'],
  providers: ['@adonisjs/core', '@adonisjs/lucid'],
  commands: [],
} as ApplicationContract['rcFile']