// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react'

import Select, {components} from 'react-select'

import {CSSObject} from '@emotion/serialize'

import {ActionMeta, OptionTypeBase, ValueType} from 'react-select/src/types'

import {getSelectBaseStyle} from '../../theme'
import ChevronUp from '../../widgets/icons/chevronUp'

type Option = {
    label: string
    value: string
}

const Options:Map<string, Option> = new Map([
    ['none', {value: 'none', label: 'None'}],
    ['count', {value: 'count', label: 'Count'}],
    ['countValue', {value: 'countValue', label: 'Count Value'}],
    ['countUniqueValue', {value: 'countUniqueValue', label: 'Count Unique Values'}],
])

const styles = {
    ...getSelectBaseStyle(),
    dropdownIndicator: (provided: CSSObject): CSSObject => ({
        ...provided,
        fontSize: '22px',
        lineHeight: '14px',
        padding: '0',
    }),
    control: (): CSSObject => ({
        border: 0,
        width: '100%',
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
    }),
    menu: (provided: CSSObject): CSSObject => ({
        ...provided,
        minWidth: '100%',
        width: 'max-content',
        background: 'rgb(var(--main-bg))',
    }),
}

const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <ChevronUp/>
        </components.DropdownIndicator>
    )
}

type Props = {
    value: string,
    menuOpen?: boolean
    onClose?: () => void
    onChange: (value: string) => void
}

const CalculationOptions = (props: Props): JSX.Element => {
    return (
        <Select
            styles={styles}
            value={Options.get(props.value)}
            isMulti={false}
            isClearable={true}
            name={'calculation_options'}
            className={'CalculationOptions'}
            options={Array.from(Options.values())}
            menuPlacement={'top'}
            isSearchable={false}
            components={{DropdownIndicator}}
            defaultMenuIsOpen={props.menuOpen}
            autoFocus={true}
            onMenuClose={() => {
                if (props.onClose) {
                    props.onClose()
                }
            }}
            onChange={(item, action) => {
                if (item?.value) {
                    props.onChange(item.value)
                }
            }}
        />
    )
}

export {
    CalculationOptions,
    Options,
    Option,
}