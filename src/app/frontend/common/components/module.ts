// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';

import {ActionbarComponent} from './actionbar/component';
import {ActionbarDetailActionsComponent} from './actionbar/detailactions/component';
import {ActionbarDetailDeleteComponent} from './actionbar/detailactions/delete/component';
import {ActionbarDetailEditComponent} from './actionbar/detailactions/edit/component';
import {ActionbarDetailExecComponent} from './actionbar/detailactions/exec/component';
import {ActionbarDetailLogsComponent} from './actionbar/detailactions/logs/component';
import {ActionbarDetailPinComponent} from './actionbar/detailactions/pin/component';
import {ActionbarDetailScaleComponent} from './actionbar/detailactions/scale/component';
import {ActionbarDetailTriggerComponent} from './actionbar/detailactions/trigger/component';
import {DefaultActionbar} from './actionbars/default/component';
import {LogsDefaultActionbar} from './actionbars/logsdefault/component';
import {LogsExecDefaultActionbar} from './actionbars/logsexecdefault/component';
import {LogsScaleDefaultActionbar} from './actionbars/logsscaledefault/component';
import {ScaleDefaultActionbar} from './actionbars/scaledefault/component';
import {TriggerDefaultActionbar} from './actionbars/triggerdefault/component';
import {PinDefaultActionbar} from './actionbars/pindefault/component';
import {AllocationChartComponent} from './allocationchart/component';
import {BreadcrumbsComponent} from './breadcrumbs/component';
import {CardComponent} from './card/component';
import {ChipDialog} from './chips/chipdialog/dialog';
import {ChipsComponent} from './chips/component';
import {ConditionListComponent} from './condition/component';
import {ContainerCardComponent} from './container/component';
import {CreatorCardComponent} from './creator/component';
import {DateComponent} from './date/component';
import {EndpointListComponent} from './endpoint/cardlist/component';
import {ExternalEndpointComponent} from './endpoint/external/component';
import {InternalEndpointComponent} from './endpoint/internal/component';
import {GraphComponent} from './graph/component';
import {GraphCardComponent} from './graphcard/component';
import {HiddenPropertyComponent} from './hiddenproperty/component';
import {ResourceLimitListComponent} from './limits/component';
import {ColumnComponent} from './list/column/component';
import {MenuComponent} from './list/column/menu/component';
import {CardListFilterComponent} from './list/filter/component';
import {RowDetailComponent} from './list/rowdetail/component';
import {LoadingSpinner} from './list/spinner/component';
import {ListZeroStateComponent} from './list/zerostate/component';
import {NamespaceChangeDialog} from './namespace/changedialog/dialog';
import {NamespaceSelectorComponent} from './namespace/component';
import {ObjectMetaComponent} from './objectmeta/component';
import {PodStatusCardComponent} from './podstatus/component';
import {PolicyRuleListComponent} from './policyrule/component';
import {PropertyComponent} from './property/component';
import {ProxyComponent} from './proxy/component';
import {ResourceQuotaListComponent} from './quotas/component';
import {ClusterRoleListComponent} from './resourcelist/clusterrole/component';
import {ConfigMapListComponent} from './resourcelist/configmap/component';
import {CRDListComponent} from './resourcelist/crd/component';
import {CRDObjectListComponent} from './resourcelist/crdobject/component';
import {CRDVersionListComponent} from './resourcelist/crdversion/component';
import {CronJobListComponent} from './resourcelist/cronjob/component';
import {DaemonSetListComponent} from './resourcelist/daemonset/component';
import {DeploymentListComponent} from './resourcelist/deployment/component';
import {EventListComponent} from './resourcelist/event/component';
import {IngressListComponent} from './resourcelist/ingress/component';
import {JobListComponent} from './resourcelist/job/component';
import {NamespaceListComponent} from './resourcelist/namespace/component';
import {NodeListComponent} from './resourcelist/node/component';
import {PersistentVolumeListComponent} from './resourcelist/persistentvolume/component';
import {PersistentVolumeClaimListComponent} from './resourcelist/persistentvolumeclaim/component';
import {PodListComponent} from './resourcelist/pod/component';
import {ReplicaSetListComponent} from './resourcelist/replicaset/component';
import {ReplicationControllerListComponent} from './resourcelist/replicationcontroller/component';
import {SecretListComponent} from './resourcelist/secret/component';
import {ServiceListComponent} from './resourcelist/service/component';
import {StatefulSetListComponent} from './resourcelist/statefulset/component';
import {StorageClassListComponent} from './resourcelist/storageclass/component';
import {CpuSparklineComponent} from './sparkline/cpu/component';
import {MemorySparklineComponent} from './sparkline/memory/component';
import {TextInputComponent} from './textinput/component';
import {UploadFileComponent} from './uploadfile/component';
import {WorkloadStatusComponent} from './workloadstatus/component';
import {ZeroStateComponent} from './zerostate/component';

const components = [
  ActionbarDetailActionsComponent,
  ActionbarDetailDeleteComponent,
  ActionbarDetailEditComponent,
  ActionbarDetailScaleComponent,
  ActionbarDetailLogsComponent,
  ActionbarDetailExecComponent,
  ActionbarDetailPinComponent,
  ActionbarComponent,
  AllocationChartComponent,
  ActionbarDetailTriggerComponent,

  BreadcrumbsComponent,

  CardComponent,
  CardListFilterComponent,
  ChipsComponent,
  CronJobListComponent,
  ClusterRoleListComponent,
  ConfigMapListComponent,
  ColumnComponent,
  ChipDialog,
  ContainerCardComponent,
  ConditionListComponent,
  CreatorCardComponent,
  CRDListComponent,
  CRDObjectListComponent,
  CRDVersionListComponent,
  GraphComponent,
  GraphCardComponent,

  DaemonSetListComponent,
  DateComponent,
  DeploymentListComponent,
  DefaultActionbar,

  EndpointListComponent,
  ExternalEndpointComponent,
  EventListComponent,

  HiddenPropertyComponent,

  IngressListComponent,
  InternalEndpointComponent,

  JobListComponent,

  LoadingSpinner,
  ListZeroStateComponent,
  LogsScaleDefaultActionbar,
  LogsExecDefaultActionbar,
  LogsDefaultActionbar,

  MenuComponent,

  NamespaceListComponent,
  NodeListComponent,
  NamespaceSelectorComponent,
  NamespaceChangeDialog,

  ObjectMetaComponent,

  PodStatusCardComponent,
  PropertyComponent,
  ProxyComponent,
  PodListComponent,
  PersistentVolumeListComponent,
  PersistentVolumeClaimListComponent,
  PolicyRuleListComponent,
  PinDefaultActionbar,

  ResourceQuotaListComponent,
  ResourceLimitListComponent,
  ReplicaSetListComponent,
  ReplicationControllerListComponent,
  RowDetailComponent,

  StorageClassListComponent,
  StatefulSetListComponent,
  SecretListComponent,
  ServiceListComponent,
  CpuSparklineComponent,
  MemorySparklineComponent,
  ScaleDefaultActionbar,

  TextInputComponent,
  TriggerDefaultActionbar,

  UploadFileComponent,

  ZeroStateComponent,
  WorkloadStatusComponent,
];

@NgModule({
  imports: [SharedModule],
  declarations: [...components],
  exports: [...components],
  entryComponents: [ChipDialog, RowDetailComponent, MenuComponent, NamespaceChangeDialog],
})
export class ComponentsModule {}
