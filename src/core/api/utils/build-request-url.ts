import { ENV } from 'core/environment';
import { IPayload } from 'core/redux/types/IPayload';

export const BuildRequestUrl =
  (payload: IPayload, path: string[], host?: string): string => {
    const newPath: string[] = [];

    path.forEach((part, index) => {
      const paramPattern = /({{[a-zA-Z]+}})/g;
      const partHasParamPattern = paramPattern.test(part);

      if (partHasParamPattern) {
        // Removes curly brances from parameter placeholders
        const paramPart = part.substr(2, part.length - 4);

        // Get value where param part matches payload key
        const paramValue = payload[paramPart];

        newPath.push(paramValue);
      }
      else {
        newPath.push(part);
      }
    });

    return `${host ?? ENV.API_BASE_URL}/${newPath.join('/')}`;
  };