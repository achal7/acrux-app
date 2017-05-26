import {DataMessage, ActionMessage} from './../../../Lib/Core';
export default {
    Refresh: {...DataMessage, name: 'refresh'},
    DoRefresh: {...ActionMessage, name: 'DoRefresh'}
};