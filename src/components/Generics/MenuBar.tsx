import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { useNavigate  } from "react-router-dom";

export default function MenuBar() {  
    const navigate = useNavigate();  

    const items = [
        {
            label: 'Router',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Styled',
                    command: () => {
                        navigate("/iWeight");                        
                    }
                },
                {
                    label: 'Unstyled',
                    url: '/iWeight'
                }
            ]
        },
    ];

    return (
        <div className="card">
            <Menubar  model={items} />
        </div>
    )
}