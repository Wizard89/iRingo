// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { Change } from '../wk2/change.js';
import { Metadata } from '../wk2/metadata.js';
export class WeatherChanges {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsWeatherChanges(bb, obj) {
        return (obj || new WeatherChanges()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsWeatherChanges(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new WeatherChanges()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    metadata(obj) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new Metadata()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    forecastStart() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    forecastEnd() {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    changes(index, obj) {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? (obj || new Change()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    changesLength() {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    static startWeatherChanges(builder) {
        builder.startObject(4);
    }
    static addMetadata(builder, metadataOffset) {
        builder.addFieldOffset(0, metadataOffset, 0);
    }
    static addForecastStart(builder, forecastStart) {
        builder.addFieldInt32(1, forecastStart, 0);
    }
    static addForecastEnd(builder, forecastEnd) {
        builder.addFieldInt32(2, forecastEnd, 0);
    }
    static addChanges(builder, changesOffset) {
        builder.addFieldOffset(3, changesOffset, 0);
    }
    static createChangesVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startChangesVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static endWeatherChanges(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createWeatherChanges(builder, metadataOffset, forecastStart, forecastEnd, changesOffset) {
        WeatherChanges.startWeatherChanges(builder);
        WeatherChanges.addMetadata(builder, metadataOffset);
        WeatherChanges.addForecastStart(builder, forecastStart);
        WeatherChanges.addForecastEnd(builder, forecastEnd);
        WeatherChanges.addChanges(builder, changesOffset);
        return WeatherChanges.endWeatherChanges(builder);
    }
}
