/**
 * title: 组件懒加载
 * */
import { Typography } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { useQkScrollLoad } from 'react-components';

const { Title, Paragraph } = Typography;

const Example = () => {
  const QkScrollLoad = useQkScrollLoad({
    placeholder: '阿多',
    delay: 5000,
    rootMargin: '100px',
  });
  return (
    <div>
      <Typography>
        <Title>QkScrollLoad 组件懒加载</Title>
        <Paragraph>
          <ul>
            <li>React中一切皆组件</li>
            <li>利用IntersectionObserver实现懒加载方案</li>
          </ul>
        </Paragraph>
      </Typography>
      <QkScrollLoad>
        {(visible) => {
          console.log(visible + '三');
          return (
            <p
              className={classNames({
                fade: visible,
              })}
              id="zhangsan"
            >
              张三
            </p>
          );
        }}
      </QkScrollLoad>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>
      <div>24</div>
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>31</div>
      <div>32</div>
      <div>33</div>
      <div>34</div>
      <div>35</div>
      <div>36</div>
      <div>37</div>
      <div>38</div>
      <div>39</div>
      <div>40</div>
      <div>41</div>
      <div>42</div>
      <div>43</div>
      <div>44</div>
      <div>45</div>
      <div>46</div>
      <div>47</div>
      <div>48</div>
      <div>49</div>
      <div>50</div>

      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>

      <QkScrollLoad placeholder={<div>abc</div>}>
        {(visible) => {
          return (
            <div
              className={classNames({
                fade: visible,
              })}
              id="zhangsan"
            >
              <input type="text" placeholder="哈啊哈" />
              <div className="lisi">李四</div>
            </div>
          );
        }}
      </QkScrollLoad>
      <div>24</div>
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>31</div>
      <div>32</div>
      <div>33</div>
      <div>34</div>
      <div>35</div>
      <div>36</div>
      <div>37</div>
      <div>38</div>
      <div>39</div>
      <div>40</div>
      <div>41</div>
      <QkScrollLoad>
        <div className="wangwu">王五</div>
      </QkScrollLoad>
      <div>42</div>
      <div>43</div>
      <div>44</div>
      <div>45</div>
      <div>46</div>
      <div>47</div>
      <div>48</div>
      <div>49</div>
      <div>50</div>
    </div>
  );
};

export default Example;
