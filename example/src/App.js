import React, {Component} from 'react';
import Tool from './Tool'
import {infomotion} from 'enebular-infomotion';

let startDate = new Date();
startDate.setDate(startDate.getDate() - 3);

const settings = {
    'cache': 'blackhole',
    'dateRange': [startDate, new Date()],
    'options': {
        'pluginPath': 'https://enebular-uhuru.herokuapp.com',
        'iframePath': '/iframe/iframe.html',
        'plugins': [
            {
                'title': 'drag-force-plugins',
                'name': '59a842c462f53a110029a5e0',
                'jsPath': 'api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.js',
                'cssPath': 'api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.css'
            },
            {
                'title': 'core',
                'name': 'core',
                'jsPath': 'public/emi/plugins/core/plugin.js',
                'cssPath': 'public/emi/plugins/core/plugin.css'
            }
        ],
        'loadingMode': 'loadScript'
    }
};

const datasources = [
    {
        "adaptor": "milkcocoaAdaptor",
        "apikey": "",
        "apisecret": "",
        "dataStore": "shirahama",
        "appId": "hotj7zr3b74",
        "id": "59a8487762f53a110029a5e7",
        "title": "shirahama",
        "name": "milkcocoaAdaptor"
    },
    {
        "adaptor": "milkcocoaAdaptor",
        "apikey": "",
        "apisecret": "",
        "appId": "bluej70pgdvs",
        "dataStore": "alerts",
        "id": "59a848f762f53a110029a5e6",
        "title": "tweets",
        "name": "milkcocoaAdaptor"
    },
    {
        "adaptor": "milkcocoaAdaptor",
        "apikey": "",
        "apisecret": "",
        "dataStore": "age",
        "appId": "bluej70pgdvs",
        "id": "59a8487762f53a110029a5e5",
        "title": "age",
        "name": "milkcocoaAdaptor"
    },
    {
        "adaptor": "milkcocoaAdaptor",
        "apikey": "",
        "apisecret": "",
        "dataStore": "gender",
        "appId": "bluej70pgdvs",
        "id": "59a8487162f53a110029a5e4",
        "title": "gender",
        "name": "milkcocoaAdaptor"
    },
    {
        "adaptor": "milkcocoaAdaptor",
        "apikey": "",
        "apisecret": "",
        "appId": "bluej70pgdvs",
        "dataStore": "device",
        "id": "59a8486b62f53a110029a5e3",
        "title": "device",
        "name": "milkcocoaAdaptor"
    },
    {
        "adaptor": "milkcocoaAdaptor",
        "apikey": "",
        "apisecret": "",
        "appId": "bluej70pgdvs",
        "dataStore": "mapData",
        "id": "59a8478962f53a110029a5e2",
        "title": "japan-map-data",
        "name": "milkcocoaAdaptor"
    },
    {
        "adaptor": "milkcocoaAdaptor",
        "apikey": "",
        "apisecret": "",
        "appId": "bluej70pgdvs",
        "dataStore": "DragForceData",
        "id": "59a8467e62f53a110029a5e1",
        "title": "drag-force-data",
        "name": "milkcocoaAdaptor"
    }
];

const graphSetting = {
    "id": "0967fe5d-0faf-4108-9b25-8baa277e19b7",
    "title": "Untitled Graph",
    "topic": "DragForceData",
    "graph": {
        "i": "0967fe5d-0faf-4108-9b25-8baa277e19b7",
        "n": "Untitled Graph",
        "t": "59a842c462f53a110029a5e0-sample-Force-Drag-Chart",
        "d": "59a8467e62f53a110029a5e1",
        "s": {
            "data-mode": "mode2",
            "label": "tag",
            "value": "value",
            "Word Cloud": "word_tag",
            "Total Sessions": "total_sessions",
            "Pages": [{"page": "/home", "value": "home"}, {"page": "/live", "value": "live"}, {
                "page": "/specials",
                "value": "specials"
            }, {"page": "/partners", "value": "partners"}, {"page": "/connect", "value": "connect"}],
            "Social Buzz": "social_buzz",
            "Social Link": "Social",
            "Buzz": [{"key": "youtube", "value": "youtube"}, {
                "key": "facebook",
                "value": "facebook"
            }, {"key": "instagram", "value": "instagram"}, {"key": "twitter", "value": "twitter"}],
            "Word Link": "Search",
            "Entries": [{
                "key": "Ad Fee",
                "value": "ad_fee",
                "side": "",
                "links": [{"link": "Paid Search"}, {"link": "Other Paid"}],
                "color": "black",
                "radius color": "#C26800",
                "font color": "#C26800"
            }, {
                "key": "Paid Search",
                "value": "paid_search",
                "side": "",
                "links": [],
                "name": "Paid Search",
                "color": "#C26800",
                "radius color": "#C26800"
            }, {
                "key": "Other Paid",
                "value": "other_paid",
                "side": "",
                "links": [],
                "color": "#C26800",
                "radius color": "#C26800"
            }, {
                "key": "Other",
                "value": "other",
                "side": "",
                "links": [],
                "color": "#666666",
                "radius color": "#666666"
            }, {
                "key": "Referral",
                "value": "referral",
                "side": "",
                "links": [],
                "color": "#666666",
                "radius color": "#666666"
            }, {
                "key": "サイト1",
                "value": "サイト１",
                "side": "",
                "links": [{"link": "none"}],
                "color": "#333333",
                "radius color": "#666666"
            }, {
                "key": "サイト2",
                "value": "サイト２",
                "side": "",
                "links": [{"link": "none"}],
                "color": "#333333",
                "radius color": "#666666"
            }, {
                "key": "Social",
                "value": "social",
                "side": "",
                "links": [],
                "color": "#55ACEE",
                "radius color": "#55ACEE"
            }, {
                "key": "kpi 1",
                "value": "kpi1",
                "side": "right",
                "links": [],
                "color": "#6CCECB",
                "radius color": "#6CCECB"
            }, {
                "key": "kpi 1'",
                "value": "kpi12",
                "side": "right",
                "links": [],
                "color": "#6CCECB",
                "radius color": "#6CCECB"
            }, {
                "key": "kpi2",
                "value": "kpi2",
                "side": "right",
                "links": [{"link": "kpi 1'"}],
                "color": "black",
                "font color": "#1ED7D1",
                "radius color": "#1ED7D1"
            }, {
                "key": "問合せ",
                "value": "問合せ",
                "side": "right",
                "links": [],
                "color": "#6CCECB",
                "radius color": "#6CCECB"
            }, {
                "key": "直帰",
                "value": "直帰",
                "side": "right",
                "links": [{"link": "none"}],
                "color": "black",
                "font color": "#E62117",
                "radius color": "#E62117"
            }, {
                "key": "Search",
                "value": "search",
                "side": "",
                "links": [],
                "color": "#6cce9a",
                "radius color": "#6cce9a"
            }],
            "line type": "normal",
            "Link URL": "http://s3-ap-northeast-1.amazonaws.com/mc-cs/emi-tableau/index_stackbar.html"
        },
        "v": []
    },
    "adapter": {"type": "milkcocoaAdaptor", "options": {"appId": "bluej70pgdvs"}},
    "graphEditor": {
        "datasource": {
            "adaptor": "milkcocoaAdaptor",
            "apikey": "",
            "apisecret": "",
            "appId": "bluej70pgdvs",
            "dataStore": "DragForceData",
            "id": "59a8467e62f53a110029a5e1",
            "title": "drag-force-data",
            "name": "milkcocoaAdaptor"
        },
        "title": "Untitled Graph",
        "type": "sample-Force-Drag-Chart",
        "settings": {
            "data-mode": "mode2",
            "label": "tag",
            "value": "value",
            "Word Cloud": "word_tag",
            "Total Sessions": "total_sessions",
            "Pages": [{"page": "/home", "value": "home"}, {"page": "/live", "value": "live"}, {
                "page": "/specials",
                "value": "specials"
            }, {"page": "/partners", "value": "partners"}, {"page": "/connect", "value": "connect"}],
            "Social Buzz": "social_buzz",
            "Social Link": "Social",
            "Buzz": [{"key": "youtube", "value": "youtube"}, {
                "key": "facebook",
                "value": "facebook"
            }, {"key": "instagram", "value": "instagram"}, {"key": "twitter", "value": "twitter"}],
            "Word Link": "Search",
            "Entries": [{
                "key": "Ad Fee",
                "value": "ad_fee",
                "side": "",
                "links": [{"link": "Paid Search"}, {"link": "Other Paid"}],
                "color": "black",
                "radius color": "#C26800",
                "font color": "#C26800"
            }, {
                "key": "Paid Search",
                "value": "paid_search",
                "side": "",
                "links": [],
                "name": "Paid Search",
                "color": "#C26800",
                "radius color": "#C26800"
            }, {
                "key": "Other Paid",
                "value": "other_paid",
                "side": "",
                "links": [],
                "color": "#C26800",
                "radius color": "#C26800"
            }, {
                "key": "Other",
                "value": "other",
                "side": "",
                "links": [],
                "color": "#666666",
                "radius color": "#666666"
            }, {
                "key": "Referral",
                "value": "referral",
                "side": "",
                "links": [],
                "color": "#666666",
                "radius color": "#666666"
            }, {
                "key": "サイト1",
                "value": "サイト１",
                "side": "",
                "links": [{"link": "none"}],
                "color": "#333333",
                "radius color": "#666666"
            }, {
                "key": "サイト2",
                "value": "サイト２",
                "side": "",
                "links": [{"link": "none"}],
                "color": "#333333",
                "radius color": "#666666"
            }, {
                "key": "Social",
                "value": "social",
                "side": "",
                "links": [],
                "color": "#55ACEE",
                "radius color": "#55ACEE"
            }, {
                "key": "kpi 1",
                "value": "kpi1",
                "side": "right",
                "links": [],
                "color": "#6CCECB",
                "radius color": "#6CCECB"
            }, {
                "key": "kpi 1'",
                "value": "kpi12",
                "side": "right",
                "links": [],
                "color": "#6CCECB",
                "radius color": "#6CCECB"
            }, {
                "key": "kpi2",
                "value": "kpi2",
                "side": "right",
                "links": [{"link": "kpi 1'"}],
                "color": "black",
                "font color": "#1ED7D1",
                "radius color": "#1ED7D1"
            }, {
                "key": "問合せ",
                "value": "問合せ",
                "side": "right",
                "links": [],
                "color": "#6CCECB",
                "radius color": "#6CCECB"
            }, {
                "key": "直帰",
                "value": "直帰",
                "side": "right",
                "links": [{"link": "none"}],
                "color": "black",
                "font color": "#E62117",
                "radius color": "#E62117"
            }, {
                "key": "Search",
                "value": "search",
                "side": "",
                "links": [],
                "color": "#6cce9a",
                "radius color": "#6cce9a"
            }],
            "line type": "normal",
            "Link URL": "http://s3-ap-northeast-1.amazonaws.com/mc-cs/emi-tableau/index_stackbar.html"
        }
    },
    "filterUI": {"options": [{"key": "tag", "values": ["home", "social", "social_buzz", "search"]}], "filter": []},
    "instance": null,
    "options": settings.options,
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pluginManager: false
        }
    }

    componentDidMount() {
        infomotion.bootstrap(settings).then((pluginManager) => {
            this.setState({pluginManager: pluginManager})
        })
    }

    render() {
        if (this.state.pluginManager) {
            return <Tool graphSetting={graphSetting}
                         settings={settings}
                         datasources={datasources}
                         pluginManager={this.state.pluginManager}/>
        }
        return <div>loading...</div>
    }
}

export default App;
