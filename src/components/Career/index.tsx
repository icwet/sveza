import './index.sass';
import React, { Component } from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    WithStore,
    CarouselInjectedProps,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

interface UpdateCheckCarouselState {
    readonly currentSlide: number;
    readonly totalSlides: number;
}

class InjectedComponent extends Component<CarouselInjectedProps & UpdateCheckCarouselState> {
    public render() {
        return (
            <div className="Count">
                <div className="Count-Left">{Math.ceil(this.props.currentSlide + 1)}</div> /{' '}
                <div className="Count-Right">{this.props.totalSlides}</div>
            </div>
        );
    }
}

const CareerCount = WithStore<CarouselInjectedProps, UpdateCheckCarouselState>(InjectedComponent, state => ({
    currentSlide: state.currentSlide,
    totalSlides: state.totalSlides,
}));

export const Career = () => {
    return (
        <section className="Career">
            <div className="Career-Header">
                <h2 className="Career-Title ">Карьера в компании</h2>
                <p className="Career-Ph">
                    <span>Для нас, сотрудников компании, «Свеза» — большая дружная семья,</span> объединяющая города и
                    области России.
                </p>
            </div>
            <div className="Career-Slider">
                <CarouselProvider naturalSlideHeight={50} naturalSlideWidth={100} totalSlides={3} visibleSlides={1.5}>
                    <ButtonBack className="Career-SliderButton">Back</ButtonBack>
                    <CareerCount />
                    <ButtonNext className="Career-SliderButton">Next</ButtonNext>
                    <Slider>
                        <Slide index={0}>
                            <iframe
                                width="706"
                                height="398"
                                src="https://www.youtube.com/embed/057T3zQG5OU"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Slide>
                        <Slide index={1}>
                            <iframe
                                width="706"
                                height="398"
                                src="https://www.youtube.com/embed/057T3zQG5OU"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Slide>
                        <Slide index={2}>
                            <iframe
                                width="706"
                                height="398"
                                src="https://www.youtube.com/embed/057T3zQG5OU"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </section>
    );
};
