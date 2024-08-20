import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutLatestNews extends Schema.Component {
  collectionName: 'components_layout_latest_news';
  info: {
    displayName: 'Latest News';
    icon: 'chartBubble';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    news_cards: Attribute.Component<'components.news-card', true>;
  };
}

export interface LayoutDownloadOurBankMobileApp extends Schema.Component {
  collectionName: 'components_layout_download_our_bank_mobile_app_s';
  info: {
    displayName: 'Download our bank Mobile App.';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images'>;
    Features: Attribute.Component<'components.list', true>;
    Google: Attribute.Component<'components.link'>;
    AppStore: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutBankingSection1 extends Schema.Component {
  collectionName: 'components_layout_banking_section_1s';
  info: {
    displayName: 'Banking Section 1';
    icon: 'cup';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    image: Attribute.Media<'images'>;
    total_country: Attribute.String;
    active_users: Attribute.String;
    ButtonLink: Attribute.Component<'components.link'>;
    Clinets: Attribute.Component<'components.clients-banking'>;
    image2: Attribute.Media<'images'>;
  };
}

export interface ComponentsValues extends Schema.Component {
  collectionName: 'components_components_values';
  info: {
    displayName: 'values';
    icon: 'cloud';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.String;
  };
}

export interface ComponentsTestimonial extends Schema.Component {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'manyToMany';
  };
  attributes: {
    title: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface ComponentsNewsCard extends Schema.Component {
  collectionName: 'components_components_news_cards';
  info: {
    displayName: 'News Card';
    icon: 'earth';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    author_name: Attribute.String;
    date: Attribute.Date;
    image: Attribute.Media<'images'>;
  };
}

export interface ComponentsList extends Schema.Component {
  collectionName: 'components_components_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    variant: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsClientsBanking extends Schema.Component {
  collectionName: 'components_components_clients_bankings';
  info: {
    displayName: 'clients_banking';
  };
  attributes: {
    total_clientfgfgf: Attribute.String;
    image: Attribute.Media<'images', true>;
  };
}

export interface Components3ItemCard extends Schema.Component {
  collectionName: 'components_components_3_item_cards';
  info: {
    displayName: '3 Item Card';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface BankingClients extends Schema.Component {
  collectionName: 'components_banking_clients_s';
  info: {
    displayName: 'Clients ';
  };
  attributes: {
    name: Attribute.String;
    logo: Attribute.Media<'images'>;
  };
}

export interface BankingBottomCard extends Schema.Component {
  collectionName: 'components_banking_bottom_cards';
  info: {
    displayName: 'Bottom Card';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface BankingBankingSection7 extends Schema.Component {
  collectionName: 'components_banking_banking_section_7s';
  info: {
    displayName: 'Banking Section 7';
  };
  attributes: {
    title: Attribute.String;
    Testimonial: Attribute.Component<'components.testimonial', true>;
    Clients: Attribute.Component<'banking.clients', true>;
  };
}

export interface BankingBankingSection6 extends Schema.Component {
  collectionName: 'components_banking_banking_section_6s';
  info: {
    displayName: 'Banking Section 6';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    left_image: Attribute.Media<'images'>;
    right_image: Attribute.Media<'images'>;
    BottomImageCard: Attribute.Component<'banking.bottom-card'>;
  };
}

export interface BankingBankingSection4 extends Schema.Component {
  collectionName: 'components_banking_banking_section_4s';
  info: {
    displayName: 'Banking Section 4';
  };
  attributes: {
    video: Attribute.Media<'videos'>;
    thubnail: Attribute.Media<'images'>;
    subTitle: Attribute.String;
    list: Attribute.Component<'components.list', true>;
    title: Attribute.String;
  };
}

export interface BankingBankingSection3 extends Schema.Component {
  collectionName: 'components_banking_banking_section_3s';
  info: {
    displayName: 'Banking Section 3';
    icon: 'clock';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    username: Attribute.String;
    user_role: Attribute.String;
    image: Attribute.Media<'images'>;
    value: Attribute.Component<'components.values', true>;
  };
}

export interface BankingBankingSection2 extends Schema.Component {
  collectionName: 'components_banking_banking_section_2s';
  info: {
    displayName: 'Banking Section 2';
    icon: 'code';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    ButtonLink: Attribute.Component<'components.link'>;
    Card: Attribute.Component<'components.3-item-card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.latest-news': LayoutLatestNews;
      'layout.download-our-bank-mobile-app': LayoutDownloadOurBankMobileApp;
      'layout.banking-section-1': LayoutBankingSection1;
      'components.values': ComponentsValues;
      'components.testimonial': ComponentsTestimonial;
      'components.news-card': ComponentsNewsCard;
      'components.list': ComponentsList;
      'components.link': ComponentsLink;
      'components.clients-banking': ComponentsClientsBanking;
      'components.3-item-card': Components3ItemCard;
      'banking.clients': BankingClients;
      'banking.bottom-card': BankingBottomCard;
      'banking.banking-section-7': BankingBankingSection7;
      'banking.banking-section-6': BankingBankingSection6;
      'banking.banking-section-4': BankingBankingSection4;
      'banking.banking-section-3': BankingBankingSection3;
      'banking.banking-section-2': BankingBankingSection2;
    }
  }
}
