import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutBankingHeroSection extends Schema.Component {
  collectionName: 'components_layout_banking_hero_sections';
  info: {
    displayName: 'Banking Hero Section';
    icon: 'emotionHappy';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    ButtonLink: Attribute.Component<'components.button'>;
    total_users: Attribute.String;
    active_country: Attribute.String;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'feather';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    variant: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.banking-hero-section': LayoutBankingHeroSection;
      'components.button': ComponentsButton;
    }
  }
}
