import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAchivements extends Struct.ComponentSchema {
  collectionName: 'components_shared_achivements';
  info: {
    description: '';
    displayName: 'Achivements';
    icon: 'star';
  };
  attributes: {
    About_achievement: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedActivities extends Struct.ComponentSchema {
  collectionName: 'components_shared_activities';
  info: {
    description: '';
    displayName: 'Activities';
  };
  attributes: {
    About_activity: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedAssociationAndClubs extends Struct.ComponentSchema {
  collectionName: 'components_shared_association_and_clubs';
  info: {
    displayName: 'Association_and_clubs';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedConferments extends Struct.ComponentSchema {
  collectionName: 'components_shared_conferments';
  info: {
    description: '';
    displayName: 'Conferments';
  };
  attributes: {
    PDF: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    priority: Schema.Attribute.Integer;
    Tittle: Schema.Attribute.String;
  };
}

export interface SharedExaminationCell extends Struct.ComponentSchema {
  collectionName: 'components_shared_examination_cells';
  info: {
    displayName: 'Examination_cell';
  };
  attributes: {
    forms: Schema.Attribute.Component<'shared.conferments', true>;
    notifications: Schema.Attribute.Component<'shared.conferments', true>;
  };
}

export interface SharedFaculty extends Struct.ComponentSchema {
  collectionName: 'components_shared_faculties';
  info: {
    description: '';
    displayName: 'Faculty';
    icon: 'emotionHappy';
  };
  attributes: {
    Designation: Schema.Attribute.String;
    Faculty_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Faculty_Name: Schema.Attribute.String;
    Priority: Schema.Attribute.Integer;
    Qualification: Schema.Attribute.String;
    Specialization: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPublications extends Struct.ComponentSchema {
  collectionName: 'components_shared_publications';
  info: {
    displayName: 'Publications';
  };
  attributes: {
    publication_date: Schema.Attribute.Date;
    publication_description: Schema.Attribute.Text;
    publication_link: Schema.Attribute.String;
    Publisher_name: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.achivements': SharedAchivements;
      'shared.activities': SharedActivities;
      'shared.association-and-clubs': SharedAssociationAndClubs;
      'shared.conferments': SharedConferments;
      'shared.examination-cell': SharedExaminationCell;
      'shared.faculty': SharedFaculty;
      'shared.media': SharedMedia;
      'shared.publications': SharedPublications;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
