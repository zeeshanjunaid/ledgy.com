import { RequesterType } from '../../components/forms/lib';
import { ClickOptions, DemoOptions } from './types';

export const track = (event: string, properties?: UnknownObject): void => {
  if (window.analytics) window.analytics.track(event, properties);
};
export const identify = (event: string, properties?: UnknownObject): void => {
  if (window.analytics) window.analytics.identify(event, properties);
};
export const trackClick = (value: string, options?: ClickOptions) => {
  track(`click.${value}`, options);
};
export const trackDemoSubmit = (value: RequesterType, options: DemoOptions) => {
  track(`getDemo.submit.${value}`, options);
};
