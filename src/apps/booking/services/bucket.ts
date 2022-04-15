import * as Bucket from '@spica-devkit/bucket';
  /**
   * Call this method before interacting with buckets.
   * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
   */
  export function initialize(
    ...initOptions: Parameters<typeof Bucket.initialize>
  ) {
    initOptions[0].publicUrl = 'https://spica-starters-7229b.hq.spicaengine.com/api';
    Bucket.initialize(...initOptions);
  }

type Rest<T extends any[]> = ((...p: T) => void) extends ((p1: infer P1, ...rest: infer R) => void) ? R : never;
type getArgs = Rest<Parameters<typeof Bucket.data.get>>;
type getAllArgs = Rest<Parameters<typeof Bucket.data.getAll>>;
type realtimeGetArgs = Rest<Parameters<typeof Bucket.data.realtime.get>>;
type realtimeGetAllArgs = Rest<Parameters<typeof Bucket.data.realtime.getAll>>;
type id = { _id: string };

export interface Room{
  _id?: string;
  name?: string;
  description?: string;
  head_image?: string;
  images?: string[];
  category?: (Category & id | string);
  properties?: (Properties & id | string)[];
}
export namespace room {
  const BUCKET_ID = '61bc5b490ba24b002d197633';
      export function get (...args: getArgs) {
        return Bucket.data.get<Room & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Room & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Room, "_id">) {
        ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Room & id) {
        ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Room> & id
      ) {
        ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Room & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Room & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Reservation{
  _id?: string;
  name?: string;
  mail?: string;
  phone_number?: string;
  check_in?: Date | string;
  check_out?: Date | string;
  room?: (Room & id | string);
  adult?: number;
  children?: number;
}
export namespace reservation {
  const BUCKET_ID = '61bc5b490ba24b002d197636';
      export function get (...args: getArgs) {
        return Bucket.data.get<Reservation & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Reservation & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Reservation, "_id">) {
        ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Reservation & id) {
        ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Reservation> & id
      ) {
        ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Reservation & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Reservation & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Category{
  _id?: string;
  name?: string;
}
export namespace category {
  const BUCKET_ID = '61bc5b490ba24b002d197639';
      export function get (...args: getArgs) {
        return Bucket.data.get<Category & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Category & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Category, "_id">) {
        
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Category & id) {
        
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Category> & id
      ) {
        
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Category & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Category & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Site_Configurations{
  _id?: string;
  contact?: {
  adress_map?: { type: "Point", coordinates: [number,number]};
  adress?: string;
  phone_number?: string;
  mail?: string;
  facebook_link?: string;
  instagram_link?: string;};
  homepage?: {
  logo?: string;
  header?: string;
  slides?: string[];};
  site_name?: string;
  about?: string;
}
export namespace site_configurations {
  const BUCKET_ID = '61bc5b490ba24b002d19763c';
      export function get (...args: getArgs) {
        return Bucket.data.get<Site_Configurations & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Site_Configurations & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Site_Configurations, "_id">) {
        
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Site_Configurations & id) {
        
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Site_Configurations> & id
      ) {
        
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Site_Configurations & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Site_Configurations & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Properties{
  _id?: string;
  name?: string;
}
export namespace properties {
  const BUCKET_ID = '61bc5b4a0ba24b002d19763f';
      export function get (...args: getArgs) {
        return Bucket.data.get<Properties & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Properties & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Properties, "_id">) {
        
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Properties & id) {
        
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Properties> & id
      ) {
        
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Properties & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Properties & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Activities{
  _id?: string;
  name?: string;
  description?: string;
  images?: string[];
}
export namespace activities {
  const BUCKET_ID = '61bc5b4a0ba24b002d197642';
      export function get (...args: getArgs) {
        return Bucket.data.get<Activities & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Activities & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Activities, "_id">) {
        
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Activities & id) {
        
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Activities> & id
      ) {
        
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Activities & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Activities & id>(BUCKET_ID, ...args);
        };
  }
}

