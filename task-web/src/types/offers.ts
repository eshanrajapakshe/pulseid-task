export interface IOffer {
  id: number;
  eligibleDays: string[];
  title: string;
  salesChannel: string;
  validFrom: string;
  validFromUTC: string;
  validTo: string | null;
  validToUTC: string | null;
  published: string;
  description: string;
  timezone: string;
  termsAndConditions: string;
  images: string[];
  maximumRewardValue: number;
  minimumTransactions: number | null;
  minimumSpend: number;
  rewardType: string;
  rewardValue: number;
  rewardPointsPerAmount: number | null;
  rewardEveryTransaction: boolean;
  rewardFrequency: string | null;
  customerRedemptionLimit: number | null;
  repeatFrequency: string | null;
  budget: number | null;
  balanceBudget: number | null;
  redemptionLimit: number | null;
  redemptionsRemaining: number | null;
  eligibleSegments: string[];
  cardProductTypes: string[];
  merchant: IMerchant;
  tags: string[];
  activationRequired: boolean;
  currency: string;
  fundingModel: string;
  defaultLanguageCode: string;
  defaultLanguageLabel: string;
  defaultLanguageNative: string;
  language: string;
  remarks: string | null;
  trackingUrl: string;
  couponCode: string | null;
  countries: string[];
  countryNames: string[];
  totalRedemptions: number | null;
  tncURL: string | null;
  tncText: string | null;
}

export interface IOffersData {
  offers: IOffer[];
  totalCount: number;
  pageCount: number;
  limit: number;
  page: number;
}

export interface IMerchant {
  id: number;
  name: string;
  image: string;
  category: ICategory;
  website: string | null;
  returnPeriod: number | null;
}

export interface ICategory {
  name: string;
}
