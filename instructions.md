The package has been configured successfully!

Make sure to first define the mapping inside the `contracts/ally.ts` file as follows.

```ts
import { RDStationDriver, RDStationConfig } from 'ally-custom-driver/build/standalone'

declare module '@ioc:Adonis/Addons/Ally' {
  interface SocialProviders {
    // ... other mappings
    rdstation: {
      config: RDStationConfig
      implementation: RDStationDriver
    }
  }
}
```
