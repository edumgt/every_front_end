// Garden

export interface IPostListItem {
  gardenId: number;
  size: string;
  gardenName: string;
  price: string;
  images: string[];
  gardenStatus: 'ACTIVE' | 'INACTIVE';
}

export interface ICropTradeItem {
  cropPostId: number;
  title: string;
  imageUrl: string;
}

export interface IPurchaseListItem {
  cropPostId: number;
  title: string;
  imageUrl: string;
}

export interface GardenListType {
  gardenId: number;
  size?: string;
  gardenName: string;
  price?: string;
  images: string[];
  gardenStatus: 'ACTIVE' | 'INACTIVE';
  gardenType: 'PRIVATE' | 'PUBLIC';
  latitude: number;
  longitude: number;
}
export interface GardesType {
  gardenId: number;
  gardenName: string;
  gardenStatus: 'ACTIVE' | 'INACTIVE' | null | undefined;
  gardenType: 'PRIVATE' | 'PUBLIC';
  images: string[];
  latitude: number;
  longitude: number;
  price: string;
  size: string;
}

interface IMyManagedGarden {
  myManagedGardenId: number;
  gardenName: string;
  useStartDate: string;
  useEndDate: string;
  images: string[];
}

export interface IMyManagedGardenList {
  myManagedGardenGetResponses: IMyManagedGarden[];
}

// export interface GardesType {
//   gardenId: number;
//   gardenName: string;
//   gardenStatus: 'ACTIVE' | 'INACTIVE' | null | undefined;
//   gardenType: 'PRIVATE' | 'PUBLIC';
//   images: string[];
//   latitude: number;
//   longitude: number;
//   price: string;
//   size: string;
// }

// interface IMyManagedGarden {
//   myManagedGardenId: number;
//   gardenName: string;
//   useStartDate: string;
//   useEndDate: string;
//   images: string[];
// }

// export interface IMyManagedGardenList {
//   myManagedGardenGetResponses: IMyManagedGarden[];
// }

// export interface GardesType {
//   gardenId: number;
//   gardenName: string;
//   gardenStatus: 'ACTIVE' | 'INACTIVE' | null | undefined;
//   gardenType: 'PRIVATE' | 'PUBLIC';
//   images: string[];
//   latitude: number;
//   longitude: number;
//   price: string;
//   size: string;
// }

export interface GardenDetailType {
  gardenId: number;
  address: string;
  latitude: number;
  longitude: number;
  gardenName: string;
  gardenType: 'PRIVATE' | 'PUBLIC';
  linkForRequest: string;
  price: string;
  contact: string;
  size: string;
  gardenStatus: 'ACTIVE' | 'INACTIVE';
  writerId: number;
  recruitStartDate: string;
  recruitEndDate: string;
  useStartDate: string;
  useEndDate: string;
  gardenDescription: string;
  images: string[];
  gardenFacility: {
    isToilet: boolean;
    isWaterway: boolean;
    isEquipment: boolean;
  };
  isLiked: boolean;
}

export interface GardenUsing {
  id: number;
  name: string;
  image?: string;

  address: string;
  latitude: number;
  longitude: number;

  useStartDate: string;
  useEndDate: string;
}

interface ICropInfos {
  name: string;
  description: string;
  link: string;
}

export interface Corp {
  month: number;
  cropInfos: ICropInfos[];
}

export interface WeatherType {
  baseDate: string;
  category: string;
  obsrValue: string;
  regionName: string;
}

export interface GetAllWeatherResponse {
  weatherApiResult: WeatherData[];
}

export interface GetPerTimeWeatherResponse {
  weatherTimeResponses: WeatherTimeData[];
  regionName: string;
}

export interface WeatherData {
  regionName: string;
  skyValue: string;
  temperatureValue: string;
}

interface WeatherTimeData {
  baseDate: string;
  temperature: string;
  skyStatus: string;
  fsctDate: string;
  fsctTime: string;
}

export interface GetWeeklyWeatherResponse {
  status: string[];
  regionName: string;
}
