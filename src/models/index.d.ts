import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerApiKey = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ApiKey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly name?: string | null;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyApiKey = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ApiKey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly name?: string | null;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ApiKey = LazyLoading extends LazyLoadingDisabled ? EagerApiKey : LazyApiKey

export declare const ApiKey: (new (init: ModelInit<ApiKey>) => ApiKey) & {
  copyOf(source: ApiKey, mutator: (draft: MutableModel<ApiKey>) => MutableModel<ApiKey> | void): ApiKey;
}