interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read tool status',
    'Create rental request',
    'Read rental request status',
  ],
  ownerAbilities: ['Manage user', 'Manage company', 'Manage tool', 'Manage rental request'],
  getQuoteUrl: 'https://app.roq.ai/proposal/dc9023bd-f3ca-41e6-abc7-73e9b13de956',
};
