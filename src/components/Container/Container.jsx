import PropTypes from 'prop-types';
import { ContainerPos } from './Container.styled';

function Container({ children }) {
    return <>
        <ContainerPos>{children}</ContainerPos>
    </>;
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;