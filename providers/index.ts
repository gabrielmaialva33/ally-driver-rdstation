import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class RDStationProvider {
  constructor(protected app: ApplicationContract) {}

  public async boot() {
    const Ally = this.app.container.resolveBinding('Adonis/Addons/Ally')
    const { RDStationDriver } = await import('../src/RDStation')

    Ally.extend('rdstation', (_, __, config, ctx) => {
      return new RDStationDriver(ctx, config)
    })
  }
}
