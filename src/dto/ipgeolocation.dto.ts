export class IPGeoLocationDto {
  geo: {
    country_code2: string;
    country_code3: string;
    country_name: string;
    country_name_official: string;
    state_prov: string;
    state_code: string;
    district: string;
    city: string;
    zipcode: string;
    latitude: string;
    longitude: string;
  };
  timezone: string;
  timezone_offset: number;
  timezone_offset_with_dst: number;
  date: string;
  date_time: string;
  date_time_txt: string;
  date_time_wti: string;
  date_time_ymd: string;
  date_time_unix: number;
  time_24: string;
  time_12: string;
  week: number;
  month: number;
  year: number;
  year_abbr: string;
  is_dst: boolean;
  dst_savings: number;
}
