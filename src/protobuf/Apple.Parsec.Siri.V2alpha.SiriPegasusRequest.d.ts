// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,keep_enum_prefix,output_javascript
// @generated from protobuf file "Apple.Parsec.Siri.V2alpha.SiriPegasusRequest.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { SiriPegasusContext } from "./apple.parsec.siri.v2alpha.SiriPegasusContext";
import { PegasusQueryContext } from "./apple.parsec.search.PegasusQueryContext";
import { PegasusSearchQuery } from "./apple.parsec.siri.v2alpha.PegasusSearchQuery";
/**
 * @generated from protobuf message SiriPegasusRequest
 */
export interface SiriPegasusRequest {
    /**
     * @generated from protobuf field: repeated PegasusSearchQuery queries = 1;
     */
    queries: PegasusSearchQuery[];
    /**
     * @generated from protobuf field: PegasusQueryContext queryContext = 2;
     */
    queryContext?: PegasusQueryContext;
    /**
     * @generated from protobuf field: optional bool userDataShareOptIn = 3;
     */
    userDataShareOptIn?: boolean;
    /**
     * optional  featureFlag = 4;
     *
     * @generated from protobuf field: optional SiriPegasusContext siriPegasusContext = 5;
     */
    siriPegasusContext?: SiriPegasusContext;
}
declare class SiriPegasusRequest$Type extends MessageType<SiriPegasusRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message SiriPegasusRequest
 */
export declare const SiriPegasusRequest: SiriPegasusRequest$Type;
export {};
