import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutBankingSection1 extends Schema.Component {
  collectionName: 'components_layout_banking_section_1s';
  info: {
    displayName: 'Banking Section 1';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    image: Attribute.Media<'images'>;
    total_country: Attribute.String;
    active_users: Attribute.String;
    ButtonLink: Attribute.Component<'components.link'>;
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

export interface Components3ItemCard extends Schema.Component {
  collectionName: 'components_components_3_item_cards';
  info: {
    displayName: '3 Item Card';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media<'images'>;
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
    subTitle: Attribute.String;
    ButtonLink: Attribute.Component<'components.link'>;
    Card: Attribute.Component<'components.3-item-card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.banking-section-1': LayoutBankingSection1;
      'components.link': ComponentsLink;
      'components.3-item-card': Components3ItemCard;
      'banking.banking-section-2': BankingBankingSection2;
    }
  }
}
