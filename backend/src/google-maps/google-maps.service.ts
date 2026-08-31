import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GoogleMapsService {
  private readonly apiKey = process.env.GOOGLE_MAPS_KEY;
  private readonly logger = new Logger(GoogleMapsService.name);

  async searchPlaces(body: any) {
    const url = 'https://places.googleapis.com/v1/places:searchNearby';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': this.apiKey!,
          'X-Goog-FieldMask': 'places.displayName',
        } as Record<string, string>,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Google Maps API error: ${errText}`);
      }

      const data = await response.json();
      return data.places ?? [];
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}
