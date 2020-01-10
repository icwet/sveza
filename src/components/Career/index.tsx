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
                <div className="Count-Left">{Math.ceil(this.props.currentSlide + 1)}</div> {'\u00A0'}/{'\u00A0'}
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
            <div className="Career-Container">
                <div className="Career-Header">
                    <h2 className="Career-Title ">Карьера в компании</h2>
                    <p className="Career-Ph">
                        <span>Для нас, сотрудников компании, «Свеза» — большая дружная семья,</span> объединяющая города
                        и области России.
                    </p>
                </div>
                <div className="Career-Slider">
                    <CarouselProvider
                        naturalSlideHeight={50}
                        naturalSlideWidth={100}
                        totalSlides={3}
                        currentSlide={0}
                        infinite={true}
                        visibleSlides={1.4}>
                        <div className="Career-Buttons">
                            <ButtonBack children="" className="Career-SliderButton Career-SliderButton_back" />
                            <CareerCount />
                            <ButtonNext children="" className="Career-SliderButton Career-SliderButton_next" />
                        </div>
                        <Slider>
                            <Slide
                                classNameVisible="Career-Slider_visible"
                                classNameHidden="Career-Slider_hidden"
                                index={0}>
                                <iframe
                                    title="video 1"
                                    width="706"
                                    height="398"
                                    src="https://www.youtube.com/embed/057T3zQG5OU"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </Slide>
                            <Slide
                                classNameVisible="Career-Slider_visible"
                                classNameHidden="Career-Slider_hidden"
                                index={1}>
                                <iframe
                                    title="video 2"
                                    width="706"
                                    height="398"
                                    src="https://www.youtube.com/embed/057T3zQG5OU"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </Slide>
                            <Slide
                                classNameVisible="Career-Slider_visible"
                                classNameHidden="Career-Slider_hidden"
                                index={2}>
                                <iframe
                                    title="video 3"
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
                <div className="Career-Text">
                    <p className="Career-Ph Career-Ph_small">
                        У нас вы можете построить своё развитие не только снизу вверх, но и по горизонтали, расширяя
                        свои профессиональные навыки. Являясь частью крупного российского холдинга «Севергрупп»,
                    </p>
                    <p className="Career-Ph Career-Ph_small">
                        мы также можем предложить вам профессиональный рост не только в «Свеза», но и в рамках группы
                        компаний «Севергрупп».
                    </p>
                </div>
            </div>
        </section>
    );
};
