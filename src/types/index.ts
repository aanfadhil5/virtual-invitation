// Couple information
export interface CoupleInfo {
  bride: {
    name: string;
    fullName: string;
    parents: string;
    photo?: string;
    socialMedia?: {
      instagram?: string;
      facebook?: string;
    };
  };
  groom: {
    name: string;
    fullName: string;
    parents: string;
    photo?: string;
    socialMedia?: {
      instagram?: string;
      facebook?: string;
    };
  };
}

// Event information
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapUrl?: string;
}

// RSVP data
export interface RSVP {
  id: string;
  name: string;
  phoneNumber: string;
  attendance: "yes" | "no" | "maybe";
  numberOfGuests: number;
  message: string;
  createdAt: string;
}

// Gallery item
export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption?: string;
}

// Love story item
export interface LoveStoryItem {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
}

// Rundown event
export interface RundownEvent {
  id: string;
  time: string;
  activity: string;
  description?: string;
}

// Gift information
export interface GiftInfo {
  bankTransfer?: {
    accountName: string;
    accountNumber: string;
    bankName: string;
  };
  shippingAddress?: string;
}

// Dresscode information
export interface DresscodeItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

// Contact person
export interface ContactPerson {
  id: string;
  name: string;
  role: string;
  phoneNumber: string;
}

// Complete wedding data
export interface WeddingData {
  id: string;
  coupleInfo: CoupleInfo;
  events: Event[];
  quote: string;
  gallery: GalleryItem[];
  videoUrl?: string;
  liveStreamUrl?: string;
  loveStory: LoveStoryItem[];
  rundown: RundownEvent[];
  rsvp: RSVP[];
  prayer: string;
  giftInfo: GiftInfo;
  dresscode: DresscodeItem[];
  contactPersons: ContactPerson[];
}
