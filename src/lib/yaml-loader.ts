import yaml from "js-yaml";

export async function loadYamlData<T>(filename: string): Promise<T> {
  try {
    const response = await fetch(`/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}: ${response.statusText}`);
    }
    const text = await response.text();
    return yaml.load(text) as T;
  } catch (error) {
    console.error(`Error loading YAML file ${filename}:`, error);
    throw error;
  }
}

// Type definitions for our YAML data structures
export interface BandInfo {
  bandName: string;
  tagline: string;
  description: string;
  image: string;
  contact: {
    email: string;
    instagram: string;
    bandcamp: string;
  };
  formation: string;
  location: string;
  genre: string;
}

export interface Event {
  date: string;
  venue: string;
  city: string;
  time: string;
  description: string;
  ticketLink: string;
  price: string;
  status: "confirmed" | "tentative" | "cancelled";
}

export interface EventsData {
  events: Event[];
}

export interface Release {
  title: string;
  type: "EP" | "Album" | "Single" | "Live Recording";
  releaseDate: string;
  tracks: number;
  description: string;
  cover: string;
  links: {
    bandcamp?: string;
    spotify?: string;
  };
  tracklist: string[];
}

export interface ReleasesData {
  releases: Release[];
}
