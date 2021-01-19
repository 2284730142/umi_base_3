import { BrandsEntity } from '@/services/entity/brands.entity';
import { QueryEntity } from '@/services/entity/query.entity';
import { RequestResponse } from 'umi-request';
import { request } from 'umi';

export async function getBrands(params: QueryEntity): Promise<RequestResponse<BrandsEntity[]>> {
  return request(`http://crystalshield.wugucloud.com/api-user/admin/equipment/v1/findbrands`, {
    method: 'GET',
    params: { ...params } || {},
  });
}
