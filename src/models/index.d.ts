import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerContactForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Email: string;
  readonly Subject: string;
  readonly Message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContactForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Email: string;
  readonly Subject: string;
  readonly Message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContactForm = LazyLoading extends LazyLoadingDisabled ? EagerContactForm : LazyContactForm

export declare const ContactForm: (new (init: ModelInit<ContactForm>) => ContactForm) & {
  copyOf(source: ContactForm, mutator: (draft: MutableModel<ContactForm>) => MutableModel<ContactForm> | void): ContactForm;
}