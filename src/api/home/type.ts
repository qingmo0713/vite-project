//定义首页模块ts数据类型
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

//代表已有的医院数据的ts类型 start
export interface Hospital {
  id: string;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    hostypeString: string;
    fullAddress: string;
  };
  hoscode: string;
  hosname: string;
  hostype: string;
  provinceCode: string;
  cityCode: string;
  districtCode: string;
  address: string;
  logoData: string;
  intro: string;
  route: string;
  status: number;
  bookingRule: {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: string[];
  };
}

export type Content = Hospital[];

export interface HospitalResponseData extends ResponseData {
  data: {
    content: Content;
    pageable: {
      sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
      };
      pageNumber: number;
      pageSize: number;
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
  };
}
//代表已有的医院数据的ts类型 end

//代表医院等级或者地区数据ts类型 start
export interface HospitalLevelAndRegion {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {};
  parentId: number;
  name: string;
  value: string;
  dictCode: string;
  hasChildren: boolean;
}
export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];

export interface HospitalLevelAndRegionResponseData extends ResponseData {
  data: HospitalLevelAndRegionArr;
}
//代表医院等级或者地区数据ts类型 end

// 医院关键字ts类型 start
export interface HospitalInfo extends ResponseData {
  data: Content;
}
// 医院关键字ts类型 end
