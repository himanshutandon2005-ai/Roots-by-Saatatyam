export const WHATSAPP_NUMBER = '918107949363';
export const WHATSAPP_DISPLAY = '+91 81079 49363';
export const INSTAGRAM_URL = 'https://www.instagram.com/rootsbysaatatyam';
export const INSTAGRAM_HANDLE = '@rootsbysaatatyam';

export const BRAND = {
  name: 'Roots by सातत्यम्',
  englishName: 'Roots',
  hindiName: 'सातत्यम्',
  tagline: 'Nature Curated',
  promise: 'Living green gifts and botanical curation that grow with your relationships.',
};

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export interface CorporateQuoteParams {
  purpose: string;
  quantity: string;
  packageStyle: string;
  brandingOptions: string[];
  companyName?: string;
  notes?: string;
}

export const waCorporateQuoteLink = (params: CorporateQuoteParams) => {
  const brandingText = params.brandingOptions.length
    ? params.brandingOptions.join(', ')
    : 'Standard curation';

  const msg = [
    '🌿 Hello Roots by सातत्यम्!',
    'I would like to enquire about Corporate Gifting / Bulk Botanical Curation:',
    '',
    `• Organization: ${params.companyName || 'Corporate Client'}`,
    `• Gifting Occasion / Purpose: ${params.purpose}`,
    `• Estimated Quantity: ${params.quantity}`,
    `• Preferred Style: ${params.packageStyle}`,
    `• Custom Branding: ${brandingText}`,
    params.notes ? `• Additional Details: ${params.notes}` : '',
    '',
    'Kindly share your corporate catalogue, volume pricing, and custom mockup details.',
  ]
    .filter(Boolean)
    .join('\n');

  return waLink(msg);
};
