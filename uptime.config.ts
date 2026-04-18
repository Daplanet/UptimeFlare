// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Da Planet Security Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://dapla.net', label: 'Network' },
    { link: 'https://daplanetsecurity.com/', label: 'Homepage' },
    { link: 'mailto:dsp-monitoring-alerts+uptimeflare@googlegroups.com', label: 'Email Support', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      id: 'network_monitor',
      name: 'Network Uptime - Layer 7',
      method: 'GET',
      target: 'https://dapla.net',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'MetisAI/1.0 (MetisAi/Monitoring +https://3umgroup.com/ai/ +https://daplanetsecurity.com/)'
      },
    },
    {
      id: 'network_monitor_ping',
      name: 'Network Uptime - Layer 5',
      method: 'GET',
      target: 'dapla.net:443',
      timeout: 10000,
    },
  ],
}

// Doing window add one element - https://deepwiki.com/lyc8503/UptimeFlare/3.3-maintenance-configuration
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
