## 忘记 MySQL 管理员密码
```
在安装目录bin文件夹下执行 mysqld --skip-grant-tables
之后执行 mysql -u root -p 不用输入密码直接回车进入
更新数据库管理员密码
update mysql.user set password=PASSWORD('新密码') where User='root';
刷新权限列表
flush privileges;
```

## SQL 语句
```
展示所有数据库列表
SHOW DATABASES;
创建数据库
CREATE DATABASE 数据库名称;
删除数据库
DROP DATABASE 数据库名称;
切换数据库
USE 数据库名称;
展示当前选中的数据库中所有的表
SHOW TABLES;
在当前数据库中创建表
CREATE TABLE IF NOT EXISTS 表名称 (
  字段名称 INT AUTO_INCREMENT, // 自动增长
  字段名称 VARCHAR(100) NOT NULL, // 不能为空
  字段名称 DATE NOT NULL DEFAULT CURRENT_TIMESTAMP, // 时间字段不能为空并添加默认值
  PRIMARY KEY (字段名称) // 设置主键
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
例:
CREATE TABLE IF NOT EXISTS learn_table (
  learn_id INT AUTO_INCREMENT,
  learn_name VARCHAR(100) NOT NULL,
  learn_age INT NOT NULL DEFAULT '18',
  learn_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (learn_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS learn_table (learn_id INT AUTO_INCREMENT,learn_name VARCHAR(100) NOT NULL,learn_age INT NOT NULL DEFAULT 18,learn_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY (learn_id))ENGINE=InnoDB DEFAULT CHARSET=utf8;

删除当前数据库中指定的表
DROP TABLE 表名称;
向当前数据库中指定表插入数据
INSERT INTO 表名称 (字段, 字段) VALUES ('新参数', '新参数');
INSERT INTO learn_table (learn_name, learn_age) VALUES ('张大亨', 24);
INSERT INTO learn_table (learn_name) VALUES ('张大亨');
从当前数据库中指定表查询数据
SELECT 字段名,字段名 FROM 表名 WHERE 条件;
SELECT learn_name, learn_age FROM learn_table WHERE learn_name='张大亨';
更新当前数据库中指定表的某些字段
UPDATE 表名 SET 字段名称=新值 WHERE 条件;
删除当前数据库中指定表的某条数据
DELETE FROM 表名 WHERE 条件;
LIKE语句
DELETE FROM 表名 WHERE 条件 LIKE '...';
SELECT * FROM learn_table WHERE learn_age LIKE '%8%' or learn_date LIKE '%8';
```
