// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { Condition } from '../wk2/condition.js';
import { ForecastMinute } from '../wk2/forecast-minute.js';
import { ForecastPeriodSummary } from '../wk2/forecast-period-summary.js';
import { Metadata } from '../wk2/metadata.js';


export class NextHourForecastData {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):NextHourForecastData {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsNextHourForecastData(bb:flatbuffers.ByteBuffer, obj?:NextHourForecastData):NextHourForecastData {
  return (obj || new NextHourForecastData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsNextHourForecastData(bb:flatbuffers.ByteBuffer, obj?:NextHourForecastData):NextHourForecastData {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new NextHourForecastData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

metadata(obj?:Metadata):Metadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Metadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

condition(index: number, obj?:Condition):Condition|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Condition()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

conditionLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

summary(index: number, obj?:ForecastPeriodSummary):ForecastPeriodSummary|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new ForecastPeriodSummary()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

summaryLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

forecastStart():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

forecastEnd():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

minutes(index: number, obj?:ForecastMinute):ForecastMinute|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new ForecastMinute()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

minutesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startNextHourForecastData(builder:flatbuffers.Builder) {
  builder.startObject(6);
}

static addMetadata(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, metadataOffset, 0);
}

static addCondition(builder:flatbuffers.Builder, conditionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, conditionOffset, 0);
}

static createConditionVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startConditionVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addSummary(builder:flatbuffers.Builder, summaryOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, summaryOffset, 0);
}

static createSummaryVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startSummaryVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addForecastStart(builder:flatbuffers.Builder, forecastStart:number) {
  builder.addFieldInt32(3, forecastStart, 0);
}

static addForecastEnd(builder:flatbuffers.Builder, forecastEnd:number) {
  builder.addFieldInt32(4, forecastEnd, 0);
}

static addMinutes(builder:flatbuffers.Builder, minutesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, minutesOffset, 0);
}

static createMinutesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startMinutesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endNextHourForecastData(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createNextHourForecastData(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset, conditionOffset:flatbuffers.Offset, summaryOffset:flatbuffers.Offset, forecastStart:number, forecastEnd:number, minutesOffset:flatbuffers.Offset):flatbuffers.Offset {
  NextHourForecastData.startNextHourForecastData(builder);
  NextHourForecastData.addMetadata(builder, metadataOffset);
  NextHourForecastData.addCondition(builder, conditionOffset);
  NextHourForecastData.addSummary(builder, summaryOffset);
  NextHourForecastData.addForecastStart(builder, forecastStart);
  NextHourForecastData.addForecastEnd(builder, forecastEnd);
  NextHourForecastData.addMinutes(builder, minutesOffset);
  return NextHourForecastData.endNextHourForecastData(builder);
}
}