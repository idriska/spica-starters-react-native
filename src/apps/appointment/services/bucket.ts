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

export interface Client{
  _id?: string;
  name?: string;
  surname?: string;
  identity_id?: string;
  phone?: string;
  email?: string;
  date_of_birth?: Date | string;
  appointments?: (Appointment & id | string)[];
}
export namespace client {
  const BUCKET_ID = '61b337ba97a0a8002e6a4e7e';
    export function get (...args: getArgs) {
      return Bucket.data.get<Client & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Client & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Client, "_id">) {
      ['appointments'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Client & id) {
      ['appointments'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
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
      document: Partial<Client> & id
    ) {
      ['appointments'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
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
        return Bucket.data.realtime.get<Client & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Client & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Appointment{
  _id?: string;
  client?: (Client & id | string);
  from?: Date | string;
  until?: Date | string;
  created_at?: Date | string;
  note?: string;
  last_update?: Date | string;
  client_status?: (-1|0|1);
  employee_status?: (-1|0|1);
  employee?: (Employee & id | string);
  service?: (Service & id | string);
  branch?: (Branch & id | string);
  rating?: (Rating & id | string);
}
export namespace appointment {
  const BUCKET_ID = '61b337bc97a0a8002e6a4e81';
    export function get (...args: getArgs) {
      return Bucket.data.get<Appointment & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Appointment & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Appointment, "_id">) {
      ['client','employee','service','branch','rating'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Appointment & id) {
      ['client','employee','service','branch','rating'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
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
      document: Partial<Appointment> & id
    ) {
      ['client','employee','service','branch','rating'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
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
        return Bucket.data.realtime.get<Appointment & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Appointment & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Employee{
  _id?: string;
  username?: string;
  identity_id?: string;
  name?: string;
  surname?: string;
  picture?: string;
  appointments?: (Appointment & id | string)[];
  services?: (Service & id | string)[];
  working_hours?: {
  day_of_week?: (1|2|3|4|5|6|7);
  hours?: {
  from?: string;
  until?: string;}[];}[];
  current_branch?: (Branch & id | string);
  average_rating?: number;
  busy_hours?: {
  from?: Date | string;
  until?: Date | string;}[];
}
export namespace employee {
  const BUCKET_ID = '61b337bd97a0a8002e6a4e84';
    export function get (...args: getArgs) {
      return Bucket.data.get<Employee & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Employee & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Employee, "_id">) {
      ['appointments','services','current_branch'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Employee & id) {
      ['appointments','services','current_branch'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
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
      document: Partial<Employee> & id
    ) {
      ['appointments','services','current_branch'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
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
        return Bucket.data.realtime.get<Employee & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Employee & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Service{
  _id?: string;
  name?: string;
  duration?: number;
  price?: number;
}
export namespace service {
  const BUCKET_ID = '61b337bf97a0a8002e6a4e87';
    export function get (...args: getArgs) {
      return Bucket.data.get<Service & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Service & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Service, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Service & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Service> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Service & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Service & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rating{
  _id?: string;
  star?: (1|2|3|4|5);
  comment?: string;
  appointment?: (Appointment & id | string);
}
export namespace rating {
  const BUCKET_ID = '61b337c197a0a8002e6a4e8a';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rating & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rating & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rating, "_id">) {
      ['appointment'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rating & id) {
      ['appointment'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
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
      document: Partial<Rating> & id
    ) {
      ['appointment'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
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
        return Bucket.data.realtime.get<Rating & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rating & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Branch{
  _id?: string;
  name?: string;
  address?: string;
  working_hours?: {
  day_of_week?: (1|2|3|4|5|6|7);
  hours?: {
  from?: string;
  until?: string;}[];}[];
  employees?: (Employee & id | string)[];
}
export namespace branch {
  const BUCKET_ID = '61b337c397a0a8002e6a4e8d';
    export function get (...args: getArgs) {
      return Bucket.data.get<Branch & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Branch & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Branch, "_id">) {
      ['employees'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Branch & id) {
      ['employees'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
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
      document: Partial<Branch> & id
    ) {
      ['employees'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
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
        return Bucket.data.realtime.get<Branch & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Branch & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Public_Holiday{
  _id?: string;
  name?: string;
  from?: Date | string;
  until?: Date | string;
}
export namespace public_holiday {
  const BUCKET_ID = '61b337c497a0a8002e6a4e90';
    export function get (...args: getArgs) {
      return Bucket.data.get<Public_Holiday & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Public_Holiday & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Public_Holiday, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Public_Holiday & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Public_Holiday> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Public_Holiday & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Public_Holiday & id>(BUCKET_ID, ...args);
      };
  }
}