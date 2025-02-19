import React, {useState} from 'react';
import Button, {ButtonRole, ButtonSize} from "@designsystem/component/Button";
import Divider, {DividerSize} from "@designsystem/component/Divider";
import TextField from "@designsystem/component/TextField";
import Checkbox from "@designsystem/component/Checkbox";
import Radio from "@designsystem/component/Radio";
import Toggle from "@designsystem/component/Toggle";

function ComponentDemo() {
    const buttonSizes: ButtonSize[] = ['large', 'medium', 'small'];
    const buttonRoles: ButtonRole[] = ['primary', 'secondary', 'assistive'];

    const dividerSizes: DividerSize[] = ['large', 'medium', 'small'];

    const [input, setInput] = useState('');

    const [checked, setChecked] = useState(false);
    const [selected, setSelected] = useState(false);
    const [toggleChecked, setToggleChecked] = useState(false);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8
        }}>
            {buttonRoles.map(role => (
                <div style={{
                    display: 'flex',
                    gap: 8
                }}>
                    {buttonSizes.map(size =>
                        <div style={{
                            display: 'flex',
                            gap: 8
                        }}>
                            <Button text={'Button'} role={role} size={size}/>
                            <Button text={'Button'} role={role} size={size} enabled={false}/>
                        </div>
                    )}
                </div>
            ))}

            {dividerSizes.map(size => (
                <Divider size={size}/>
            ))}

            <TextField
                placeholder={'placeholder'}
                label={'label'}
                supportingText={'supportingText'}
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <TextField
                placeholder={'placeholder'}
                label={'label'}
                supportingText={'supportingText'}
                isError={true}
                value={input}
                onChange={e => setInput(e.target.value)}
                style={{
                    marginTop: 32
                }}
            />
            <TextField
                placeholder={'placeholder'}
                label={'label'}
                supportingText={'supportingText'}
                enabled={false}
                value={input}
                onChange={e => setInput(e.target.value)}
                style={{
                    marginTop: 32
                }}
            />

            <Checkbox
                style={{
                    marginTop: 32
                }}
                label={'title'}
                checked={checked}
                onChange={setChecked}
            />
            <Radio
                label={'title'}
                selected={selected}
                onChange={setSelected}
            />
            <Toggle
                checked={toggleChecked}
                onChange={setToggleChecked}
            />
        </div>
    );
}

export default ComponentDemo;