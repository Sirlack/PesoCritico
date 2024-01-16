import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function MenuBar() {    
    const items = [
        {
            label: 'Router',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Styled',
                    url: '/main_window'
                },
                {
                    label: 'Unstyled',
                    url: '/test'
                }
            ]
        },
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}