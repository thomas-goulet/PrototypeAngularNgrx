/**
 * IWLS Internal REST API
 * This rest api has been design for the internal uses of the waterlevel system. All the GET request are to receive data that are in the database. All the POST request are to add prediction to the database.
 *
 * The version of the OpenAPI document: 1.0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Data } from './data';


export interface DataSet { 
    data?: Array<Data>;
    options?: { [key: string]: string; };
}

