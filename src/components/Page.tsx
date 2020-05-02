import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Title, ModeType, ContentText } from '../common/Typography';
import { Container, BlockWrapper, Wrapper } from '../common/Layout';
import { Switch, SwitchInput, SwitchSlider, Loader } from '../common/Modules';
import Colors from '../common/Colors';
import Card from './Card';
import { getFormattedNumber } from './utils';

export interface PageProps {
}

const GET_STATS = gql`
    {
        latest{
            confirmed
            recoveries
            deaths
        }
    }
`;

const Page: any = () => {
    const [mode, setMode] = useState('light');
    const [checked, setChecked] = useState(false);

    const handleToggleSwitch = () => {
        setChecked(!checked);
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    };
    const { error, loading, data } = useQuery(GET_STATS);

    if (loading) return <Loader mode={mode as ModeType} />;
    if (error) {
        return <div>Error...</div>
    }
    const { confirmed, deaths: death_, recoveries } = data?.latest;

    return (
        <Container mode={mode as ModeType} >
            <BlockWrapper spacing="none">
                <Wrapper spacing='none' alignment='space-between'>
                    <Title mainHeader={true} mode={mode as ModeType} >Covid-19 Reports </Title>
                    <Switch>
                        <SwitchInput checked={checked} onClick={handleToggleSwitch} />
                        <SwitchSlider checked={checked} />
                    </Switch>
                </Wrapper>

                <BlockWrapper spacing='large'>
                    <ContentText mode={mode as ModeType}>Cumulative Reports for Nigeria</ContentText>
                    <Wrapper spacing='medium' alignment='space-between' shouldWrap={true}>
                        <Card color={Colors.darkBlue} mode={mode as ModeType} title={getFormattedNumber(confirmed)} text='Total Cases' />
                        <Card color={Colors.maroon} mode={mode as ModeType} title={getFormattedNumber(death_)} text='Deaths' />
                        <Card color={Colors.darkGreen} mode={mode as ModeType} title={getFormattedNumber(recoveries)} text='Recovered' />
                        <Card color={Colors.armyGreen} mode={mode as ModeType} title={getFormattedNumber(confirmed - recoveries - death_)} text='Active Cases' />
                    </Wrapper>
                </BlockWrapper>

            </BlockWrapper>
        </Container>
    )
};

export default Page;