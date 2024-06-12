import React, { useReducer, useState } from 'react';
import Inputss from './ui/Inputss';
import Buttons from './ui/Buttons';
import CustomSelect from './ui/CustomSelect';
import CustomTextarea from './ui/CustomTextarea';

function formReducer(state = {}, { type, payload }) {
    switch (type) {
        case 'UPDATE_EVENT_DATE':
            return { ...state, eventDate: payload };
        case 'UPDATE_EVENT_TIME':
            return { ...state, eventTime: payload };
        case 'UPDATE_EVENT_DESCRIPTION':
            return { ...state, eventDescription: payload };
        case 'UPDATE_SELECTED_LAB_TEMPLATE':
            return { ...state, selectedLabTemplate: payload };
        case 'UPDATE_NUM_LAB_ENVIRONMENTS':
            return { ...state, numLabEnvironments: payload };
        case 'UPDATE_LEAD_TIME':
            return { ...state, leadTime: payload };
        case 'UPDATE_CSV_FILE':
            return { ...state, csvFile: payload };

        default:
            return state;
    }
}

const EventCreateForm = () => {

    const initialFormState = {
        eventDate: '',
        eventTime: '',
        eventDescription: '',
        csvFile: null,
        selectedLabTemplate: '',
        numLabEnvironments: 1,
        leadTime: 2,
    }
    const [state, dispatch] = useReducer(formReducer, initialFormState)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event created!');
        alert(JSON.stringify(state));
    };
    const eventType = {
        eventDate: 'UPDATE_EVENT_DATE',
        eventTime: 'UPDATE_EVENT_TIME',
        eventDescription: 'UPDATE_EVENT_DESCRIPTION',
        selectedLabTemplate: 'UPDATE_SELECTED_LAB_TEMPLATE',
        numLabEnvironments: 'UPDATE_NUM_LAB_ENVIRONMENTS',
        leadTime: 'UPDATE_LEAD_TIME',
    }

    const handleInputChange = (event, type) => {
        dispatch({
            type: eventType[type],
            payload: event.target.value,
        });
    };

    const handleInputChange2 = useCallback(
       (event, type) => {
        dispatch({
            type: eventType[type],
            payload: event.target.value,
        })
       },[],
    )

    const handleFileChange = (event) => {
        dispatch({
            type: 'UPDATE_CSV_FILE',
            payload: event.target.files[0],
        });
    };

    return (
        <form
            className='p-4  bg-slate-500 rounded-lg flex flex-col gap-3'
            onSubmit={handleSubmit}
        >
            <div className='text-lg text-white font-medium text-center'>Create New Event </div>
            <Inputss placeholder='Date' type="date" value={state.eventDate} onChange={(event) => handleInputChange(event, 'eventDate')} />
            <Inputss placeholder='Time' type="time" value={state.eventTime} onChange={(event) => handleInputChange(event, 'eventTime')} />
            <CustomTextarea
                value={state.eventDescription}
                onChange={(event) => handleInputChange(event, 'eventDescription')}
                placeholder="Description:"
            />
            <Inputss placeholder='Upload CSV file:' type="file" onChange={handleFileChange} />
            <CustomSelect
                placeholder="Select"
                value={state.selectedLabTemplate}
                onChange={(event) => handleInputChange(event, 'selectedLabTemplate')}
                options={[
                    { value: 'template1', label: 'Template 1' },
                    { value: 'template2', label: 'Template 2' },
                ]}
            />
            <hr />
            <Inputss placeholder="Number of Lab Environments" type="number" value={state.numLabEnvironments} onChange={(event) => handleInputChange(event, 'numLabEnvironments')} />
            <Inputss placeholder='Lead Time (hours):' type="time" value={state.leadTime} onChange={(event) => handleInputChange(event, 'leadTime')} />
            <Buttons type="submit">Create Event</Buttons>
        </form>
    );
};

export default EventCreateForm;
