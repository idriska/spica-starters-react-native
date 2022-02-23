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

export interface Category{
  _id?: string;
  name: string;
  img?: string;
  sub_categories?: (Category & id | string)[];
  is_sub_category?: boolean;
}
export namespace category {
  const BUCKET_ID = '61b3610897a0a8002e6a51a4';
    export function get (...args: getArgs) {
      return Bucket.data.get<Category & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Category & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Category, "_id">) {
      ['sub_categories'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Category & id) {
      ['sub_categories'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Category> & id
    ) {
      ['sub_categories'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Category & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Category & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Attribute{
  _id?: string;
  name?: string;
  value?: string[];
}
export namespace attribute {
  const BUCKET_ID = '61b3610597a0a8002e6a51a1';
    export function get (...args: getArgs) {
      return Bucket.data.get<Attribute & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Attribute & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Attribute, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Attribute & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Attribute> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Attribute & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Attribute & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Coupon{
  _id?: string;
  code?: string;
  description?: string;
  discount_type?: ('Discount Percentage'|'Fixed Bucket Discount'|'Fixed Product Discount');
  amount?: number;
  expiry_date?: Date | string;
}
export namespace coupon {
  const BUCKET_ID = '61b3610c97a0a8002e6a51ad';
    export function get (...args: getArgs) {
      return Bucket.data.get<Coupon & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Coupon & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Coupon, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Coupon & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Coupon> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Coupon & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Coupon & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Basket{
  _id?: string;
  title?: string;
  products?: (Product & id | string)[];
  metadata?: {
  quantity?: number;
  product_id?: string;
  selected_attribute?: string;}[];
  coupon?: (Coupon & id | string);
  user?: (User & id | string);
  total_price?: number;
  is_completed?: boolean;
}
export namespace basket {
  const BUCKET_ID = '61b3610e97a0a8002e6a51b0';
    export function get (...args: getArgs) {
      return Bucket.data.get<Basket & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Basket & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Basket, "_id">) {
      ['products','coupon','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Basket & id) {
      ['products','coupon','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Basket> & id
    ) {
      ['products','coupon','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Basket & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Basket & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rating{
  _id?: string;
  comment?: string;
  rating?: (1|2|3|4|5);
  user?: (User & id | string);
}
export namespace Rating {
  const BUCKET_ID = '61b3611597a0a8002e6a51bf';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rating & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rating & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rating, "_id">) {
      ['user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rating & id) {
      ['user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      ['user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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

export interface Order{
  _id?: string;
  title?: string;
  status?: ('cancelled'|'delivering'|'delivered'|'preparing'|'pending');
  created_at?: Date | string;
  basket?: (Basket & id | string);
  invoice?: (Invoice & id | string);
  note?: string;
}
export namespace order {
  const BUCKET_ID = '61b3611497a0a8002e6a51bc';
    export function get (...args: getArgs) {
      return Bucket.data.get<Order & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Order & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Order, "_id">) {
      ['basket','invoice'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Order & id) {
      ['basket','invoice'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Order> & id
    ) {
      ['basket','invoice'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Order & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Order & id>(BUCKET_ID, ...args);
      };
  }
}

export interface User{
  _id?: string;
  identity_id?: string;
  email?: string;
  name?: string;
  surname?: string;
  phone?: string;
  address?: {
  title?: string;
  country?: string;
  province?: string;
  district?: string;
  full_address?: string;
  post_code?: number;
  phone?: string;}[];
  picture?: string;
}
export namespace user {
  const BUCKET_ID = '61b3611797a0a8002e6a51c2';
    export function get (...args: getArgs) {
      return Bucket.data.get<User & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<User, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: User & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<User> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<User & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<User & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Used_Coupon_{
  _id?: string;
  title?: string;
  coupon?: (Coupon & id | string);
  user?: (User & id | string);
  date?: Date | string;
}
export namespace used_coupon_ {
  const BUCKET_ID = '61b3611897a0a8002e6a51c5';
    export function get (...args: getArgs) {
      return Bucket.data.get<Used_Coupon_ & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Used_Coupon_ & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Used_Coupon_, "_id">) {
      ['coupon','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Used_Coupon_ & id) {
      ['coupon','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Used_Coupon_> & id
    ) {
      ['coupon','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Used_Coupon_ & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Used_Coupon_ & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Liked_Product{
  _id?: string;
  products?: (Product & id | string)[];
  user?: (User & id | string);
  created_at?: Date | string;
  title?: string;
}
export namespace liked_product {
  const BUCKET_ID = '61b3611a97a0a8002e6a51c8';
    export function get (...args: getArgs) {
      return Bucket.data.get<Liked_Product & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Liked_Product & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Liked_Product, "_id">) {
      ['products','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Liked_Product & id) {
      ['products','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Liked_Product> & id
    ) {
      ['products','user'].forEach((field) => {
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
        return Bucket.data.realtime.get<Liked_Product & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Liked_Product & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Campaign_Product{
  _id?: string;
  title?: string;
  img?: string;
  products?: (Product & id | string)[];
}
export namespace campaign_product {
  const BUCKET_ID = '61b3611b97a0a8002e6a51cb';
    export function get (...args: getArgs) {
      return Bucket.data.get<Campaign_Product & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Campaign_Product & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Campaign_Product, "_id">) {
      ['products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Campaign_Product & id) {
      ['products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Campaign_Product> & id
    ) {
      ['products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Campaign_Product & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Campaign_Product & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Payment_Method{
  _id?: string;
  title?: string;
  description?: string;
  is_active?: boolean;
}
export namespace payment_method {
  const BUCKET_ID = '61b3610997a0a8002e6a51a7';
    export function get (...args: getArgs) {
      return Bucket.data.get<Payment_Method & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Payment_Method & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Payment_Method, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Payment_Method & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Payment_Method> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Payment_Method & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Payment_Method & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Product{
  _id?: string;
  title?: string;
  sub_title?: string;
  description?: string;
  categories?: (Category & id | string)[];
  attributes?: (Attribute & id | string)[];
  tag?: string[];
  cover_image?: string;
  gallery?: string[];
  type?: ('physical'|'digital');
  normal_price?: number;
  discounted_price?: number;
  discount_start_date?: Date | string;
  discount_end_date?: Date | string;
  is_free_delivery?: boolean;
  is_available?: boolean;
  created_at?: Date | string;
}
export namespace product {
  const BUCKET_ID = '61b3610f97a0a8002e6a51b3';
    export function get (...args: getArgs) {
      return Bucket.data.get<Product & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Product & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Product, "_id">) {
      ['categories','attributes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Product & id) {
      ['categories','attributes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Product> & id
    ) {
      ['categories','attributes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Product & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Product & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Stock{
  _id?: string;
  sku?: string;
  quantity?: number;
  is_enable?: boolean;
  sell_if_not_available?: boolean;
  product?: (Product & id | string);
}
export namespace stock {
  const BUCKET_ID = '61b3611197a0a8002e6a51b6';
    export function get (...args: getArgs) {
      return Bucket.data.get<Stock & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Stock & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Stock, "_id">) {
      ['product'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Stock & id) {
      ['product'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Stock> & id
    ) {
      ['product'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Stock & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Stock & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Invoice{
  _id?: string;
  name: string;
  surname: string;
  address?: {
  country?: string;
  district?: string;
  full_address?: string;
  post_code?: number;
  province?: string;
  title?: string;};
  company_name?: string;
  phone: string;
  email: string;
  basket?: (Basket & id | string);
  payment_method?: (Payment_Method & id | string);
}
export namespace invoice {
  const BUCKET_ID = '61b3611297a0a8002e6a51b9';
    export function get (...args: getArgs) {
      return Bucket.data.get<Invoice & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Invoice & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Invoice, "_id">) {
      ['basket','payment_method'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Invoice & id) {
      ['basket','payment_method'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Invoice> & id
    ) {
      ['basket','payment_method'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Invoice & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Invoice & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Store_Settings{
  _id?: string;
  name?: string;
  address?: {
  country?: string;
  province?: string;
  district?: string;
  full_address?: string;
  post_code?: number;};
  currency?: string;
  email?: string;
  phone?: string;
  weight_unit?: string;
  size_unit?: string;
  shipping_price?: number;
  enable_comments?: boolean;
  privacy_policy?: string;
  terms_of_use?: string;
}
export namespace store_settings {
  const BUCKET_ID = '61b3610b97a0a8002e6a51aa';
    export function get (...args: getArgs) {
      return Bucket.data.get<Store_Settings & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Store_Settings & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Store_Settings, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Store_Settings & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Store_Settings> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Store_Settings & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Store_Settings & id>(BUCKET_ID, ...args);
      };
  }
}
