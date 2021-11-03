import React from 'react';
import CourseItem from './CourseItem';

export default function CourseList(props) {

    return (
        <section className="section-courseoffline">
            <div className="container">
                {
                    props.description &&
                    <p className="top-des">
                        {props.description}
                    </p>
                }

                <div className="textbox">
                    <h2 className="main-title">{props.name}</h2>
                </div>
                <div className="list row">
                    {
                        props.list.map((value, key) => (
                            <CourseItem
                                {...value}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}