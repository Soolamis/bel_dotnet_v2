import React, { useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Section from '../../../share/Section';
import { getTranslation } from '../../../share/translationContainer';
import Carousel from './Carousel';
import Stack from './Stack';
import { actions, selectors } from '../reducer';
import { NEWS_HEIGHT } from '../constants';

const useStyles = makeStyles({
    root: {
        height: NEWS_HEIGHT,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
    },
    editButton: {
        position: 'absolute',
        right: '0.1em',
        bottom: '0.1em',
    },
});

export default function NewsCarousel(): React.ReactElement {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { i18n } = useTranslation();

    const news = useSelector(selectors.newsList);

    const slides = useMemo(
        () => news.map((elem) => ({
            id: elem.id,
            img: elem.preview,
            title: getTranslation(elem.title, i18n.language),
            link: `/news/${elem.id}`,
        })),
        [i18n.language, news],
    );

    useEffect(
        () => {
            dispatch(actions.news.getNews());
        },
        [dispatch],
    );

    return (
        <Section className={classes.root}>
            <Grid container>
                <Grid
                    item
                    sm={8}
                    xs={12}
                >
                    <Carousel slides={slides} />
                </Grid>
                <Grid
                    item
                    sm={4}
                    xs={12}
                >
                    <Stack news={slides} />
                </Grid>
            </Grid>
            <IconButton
                className={classes.editButton}
                component={Link}
                to="/editNews/new"
            >
                <AddIcon />
            </IconButton>
        </Section>
    );
}