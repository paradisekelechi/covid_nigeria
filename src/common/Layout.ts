import styled from 'styled-components';
import { ModeType } from './Typography';
import Colors from './Colors';

type ContainerType = {
    mode?: ModeType;
}

export const Container = styled.div<ContainerType>`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.mode && props.mode === 'dark' ? Colors.darkBlue : Colors.skyBlue};
    padding: 50px 100px;
    box-sizing: border-box;
    margin: 0px;
    transition: all 800ms;

    @media (max-width: 630px) {
        padding: 20px;
    }
`;

export type SpacingType = 'none' | 'small' | 'medium' | 'large';
export type AlignmentType = 'left' | 'right' | 'space-between' | 'space-evenly';

type WrapperType = {
    spacing: SpacingType;
    alignment?: AlignmentType;
    mode?: ModeType;
    shouldWrap?: boolean;
}

export const BlockWrapper = styled.div<WrapperType>`
    width: 100%;
    box-sizing: border-box;
    margin-top: ${props => {
        switch (props.spacing) {
            case 'none':
                return '0px';
            case 'small':
                return '1em';
            case 'medium':
                return '2em';
            case 'large':
                return '4.5em';

            default:
                return '0px';
        }
    }};
    flex-wrap: ${props => props.shouldWrap ? 'wrap' : 'no-wrap'};
`;


export const Wrapper = styled(BlockWrapper)`
    display: flex;
    justify-content: ${props => {
        switch (props.alignment) {
            case 'left':
                return 'flex-start';
            case 'right':
                return 'flex-end';
            case 'space-between':
                return 'space-between';
            case 'space-evenly':
                return 'space-evenly';
            default:
                return 'flex-start';
        }
    }};
`;

export const Card = styled.div<{ color?: string, mode: ModeType }>`
    width: 22%;
    padding: 35px 0px;
    box-sizing: border-box;
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0px 3px 20px ${props => props.mode && props.mode === 'dark' ? Colors.skyBlue : Colors.darkBlue};
    background-color: ${props => props.color};
    border-top: 2px solid ${props => props.mode && props.mode === 'dark' ? Colors.skyBlue : Colors.darkBlue};

    @media (max-width: 1130px) {
        width: 45%;
    }

    @media (max-width: 630px) {
        width: 85%;
        margin: 22px auto;
    }
`;


