export interface propertyPropTypes {
  //current property address string.
  address: string;
  //current property id string.
  id: string;
  //current property Type string. If undefined it's showing all properties.
  propertyType: undefined | string;
}

export interface SelectedTypes {}

export interface PropertyDetailType {
  //property address details
  address?: string;
  floorArea?: number;
  id?: string;
  numberOfRooms?: number;
  postcode?: string;
  propertyType?: string;
}
export interface PropertyDetailsTypes {
  property?: PropertyDetailType;
}

export interface PropertiesTypes {
  address?: string;
  id?: string;
  postcode?: string;
  propertyType?: string;
}
export interface CurrentPropertiesTypes {
  properties?: PropertiesTypes[];
}
