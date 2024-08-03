import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { Graphic } from '../../../../utils/GraphicksOrder/graphic/Graphic';
import styles from './Graphic.module.css';

const getStyle = (element) => window.getComputedStyle(element);

describe('Graphic Component', () => {
    beforeEach(() => {
        delete window.location;
        window.location = { pathname: '' };
    });

    test('renders with correct styles for /make-first-step-order', () => {
        window.location.pathname = '/make-first-step-order';

        const { container } = render(<Graphic />);

        const cubes = container.querySelectorAll(`.${styles.cubeOne}`);
        const [cubeOne, cubeTwo, cubeThree] = cubes;

        expect(getStyle(cubeOne).backgroundColor).toBe('rgb(27, 158, 34)');
        expect(getStyle(cubeOne.querySelector(`.${styles.innerCubeText}`)).color).toBe('rgb(255, 255, 255)');

        expect(getStyle(cubeTwo).backgroundColor).toBe('rgb(255, 255, 255)');
        expect(getStyle(cubeTwo.querySelector(`.${styles.innerCubeText}`)).color).toBe('rgb(0, 0, 0)');

        expect(getStyle(cubeThree).backgroundColor).toBe('rgb(255, 255, 255)');
        expect(getStyle(cubeThree.querySelector(`.${styles.innerCubeText}`)).color).toBe('rgb(0, 0, 0)');
    });

    test('renders with correct styles for /make-second-step-order', () => {
        window.location.pathname = '/make-second-step-order';

        const { container } = render(<Graphic />);

        const cubes = container.querySelectorAll(`.${styles.cubeOne}`);
        const [cubeOne, cubeTwo, cubeThree] = cubes;

        expect(getStyle(cubeOne).backgroundColor).toBe('rgb(255, 255, 255)');
        expect(getStyle(cubeOne.querySelector(`.${styles.innerCubeText}`)).color).toBe('rgb(0, 0, 0)');

        expect(getStyle(cubeTwo).backgroundColor).toBe('rgb(27, 158, 34)');
        expect(getStyle(cubeTwo.querySelector(`.${styles.innerCubeText}`)).color).toBe('rgb(255, 255, 255)');

        expect(getStyle(cubeThree).backgroundColor).toBe('rgb(255, 255, 255)');
        expect(getStyle(cubeThree.querySelector(`.${styles.innerCubeText}`)).color).toBe('rgb(0, 0, 0)');
    });

    test('renders with correct styles for /make-thirth-step-order', () => {
        window.location.pathname = '/make-thirth-step-order';

        const { container } = render(<Graphic />);

        const cubes = container.querySelectorAll(`.${styles.cubeOne}`);
        const [cubeOne, cubeTwo, cubeThree] = cubes;

        expect(getStyle(cubeOne).backgroundColor).toBe('rgb(255, 255, 255)');
        expect(getStyle(cubeOne.querySelector(`.${styles.innerCubeText}`)).color).toBe('rgb(0, 0, 0)');

        expect(getStyle(cubeTwo).backgroundColor).toBe('rgb(255, 255, 255)');
        expect(getStyle(cubeTwo.querySelector(`.${styles.innerCubeText}`)).color).toBe('rgb(0, 0, 0)');

        expect(getStyle(cubeThree).backgroundColor).toBe('rgb(27, 158, 34)');
        expect(getStyle(cubeThree.querySelector(`.${styles.innerCubeText}`)).color).toBe('rgb(255, 255, 255)');
    });
});
