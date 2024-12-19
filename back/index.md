
---

### **`src/main/java/cn/zwz/basics`**

#### **`baseClass`**
- 文件内容：
    - `BaseEntity.java`: 基础实体类，可能包含所有实体共有的字段（如 `id`、`createTime`、`updateTime`）。
    - `BaseController.java`: 基础控制器类，封装一些通用的 HTTP 请求处理逻辑。
    - `BaseService.java`: 通用的 Service 接口，定义基础的增删改查方法。
    - `BaseServiceImpl.java`: 通用的 Service 实现类，提供基础功能的默认实现。

#### **`baseVo`**
- 文件内容：
    - `PageVO.java`: 用于分页功能的数据封装类，包含当前页数、每页数量、总记录数、返回的数据列表等。
    - `ResultVO.java`: 用于统一 API 接口返回格式，包含 `code`（状态码）、`message`（提示信息）、`data`（返回数据）。

#### **`code`**
- 文件内容：
    - **`bean`**：
        - `Result.java`: 用于封装后端返回结果的 JavaBean 类。
        - `ErrorCode.java`: 定义项目中通用的错误码及其描述信息。
    - **`vue`**：
        - `VueResult.java`: 专门为 Vue 前端框架设计的结果封装类。

#### **`exception`**
- 文件内容：
    - `CustomException.java`: 自定义异常类，用于抛出业务逻辑中的特定错误。
    - `GlobalExceptionHandler.java`: 全局异常处理器，统一捕获和处理项目中抛出的异常。
    - `ValidationException.java`: 专门用于参数校验失败的异常类。

#### **`lock`**
- 文件内容：
    - `RedisLock.java`: 基于 Redis 实现的分布式锁类。
    - `DatabaseLock.java`: 基于数据库表实现的分布式锁。
    - `LockUtils.java`: 提供统一的锁工具方法。

#### **`log`**
- 文件内容：
    - `LogAspect.java`: 日志切面类，使用 AOP 记录系统方法调用日志。
    - `LogUtils.java`: 日志工具类，封装常用日志记录逻辑。

#### **`mybatisplus`**
- 文件内容：
    - `MyBatisPlusConfig.java`: MyBatis-Plus 的配置类，用于设置分页插件或性能优化插件。
    - `Generator.java`: MyBatis-Plus 代码生成器，自动生成实体类、Mapper 接口等文件。

#### **`parameter`**
- 文件内容：
    - `ParameterValidator.java`: 参数校验工具类，用于验证 HTTP 请求中的参数。
    - `RequestParameter.java`: 用于封装前端传入的请求参数。

#### **`redis`**
- 文件内容：
    - `RedisConfig.java`: Redis 的配置类。
    - `RedisUtils.java`: 封装 Redis 操作的工具类，例如设置缓存、获取缓存、删除缓存等方法。

#### **`security`**
- 文件内容：
    - **`controller`**：
        - `AuthController.java`: 处理用户登录、注册、Token 刷新等与安全相关的请求。
    - **`jwt`**：
        - `JwtUtils.java`: JWT 工具类，用于生成和验证 Token。
        - `JwtFilter.java`: 过滤器类，拦截请求并验证 Token 的合法性。
    - **`permission`**：
        - `PermissionChecker.java`: 权限检查工具类。
        - `PermissionAspect.java`: 使用 AOP 检查用户是否有权限执行某些操作。
    - **`utils`**：
        - `EncryptionUtils.java`: 加密工具类，用于密码加密和解密。
        - `SecurityContext.java`: 提供当前登录用户的上下文信息。
    - **`validate`**：
        - `LoginValidator.java`: 验证登录请求参数是否符合要求。
        - `PasswordStrengthValidator.java`: 检查密码强度。

#### **`utils`**
- 文件内容：
    - `DateUtils.java`: 日期时间工具类，封装常用的时间格式化、解析方法。
    - `FileUtils.java`: 文件操作工具类，提供上传、下载等功能。
    - `StringUtils.java`: 字符串工具类，例如判空、格式化等方法。

---

### **`src/main/java/cn/zwz/data`**

#### **`controller`**
- 文件内容：
    - `DataController.java`: 数据模块的主要控制器，处理前端的增删改查请求。
    - `ExportController.java`: 数据导出相关的控制器，提供 Excel 或 CSV 导出功能。

#### **`dao`**
- 文件内容：
    - **`mapper`**：
        - `DataMapper.java`: MyBatis 映射接口，用于操作数据表。
        - `ExportMapper.java`: 专门用于处理与数据导出相关的 SQL 查询。

#### **`entity`**
- 文件内容：
    - `DataEntity.java`: 数据表对应的实体类。
    - `ExportEntity.java`: 导出记录对应的实体类。

#### **`service`**
- 文件内容：
    - `DataService.java`: 业务逻辑接口，定义数据模块的核心功能。
    - `ExportService.java`: 数据导出服务接口。

#### **`serviceimpl`**
- 文件内容：
    - `DataServiceImpl.java`: 数据模块的具体业务逻辑实现。
    - `ExportServiceImpl.java`: 数据导出服务的具体实现。

#### **`utils`**
- 文件内容：
    - `ExcelUtils.java`: Excel 文件操作工具类。
    - `DataConverter.java`: 数据格式转换工具类。

#### **`vo`**
- 文件内容：
    - `DataVO.java`: 数据模块的 VO 类，用于返回给前端的数据。
    - `ExportVO.java`: 导出数据的 VO 类，封装导出文件的相关信息。

---

### **`src/main/java/cn/zwz/doctor`**

#### **`controller`**
- 文件内容：
    - `DoctorController.java`: 处理与医生相关的 HTTP 请求，例如查看预约列表。

#### **`entity`**
- 文件内容：
    - `DoctorEntity.java`: 医生表对应的实体类。

#### **`mapper`**
- 文件内容：
    - `DoctorMapper.java`: 医生模块的数据库映射接口，负责医生表的查询和操作。

#### **`service`**
- 文件内容：
    - `DoctorService.java`: 医生模块的业务逻辑接口。

#### **`serviceimpl`**
- 文件内容：
    - `DoctorServiceImpl.java`: 医生模块的业务逻辑实现类。

#### **`utils`**
- 文件内容：
    - `ScheduleUtils.java`: 医生排班相关的工具类。

---

### **`src/main/java/cn/zwz/test`**

#### **`controller`**
- 文件内容：
    - `TestController.java`: 测试控制器，用于验证 API 返回结果是否正确。

#### **`entity`**
- 文件内容：
    - `TestEntity.java`: 测试用的实体类。

#### **`mapper`**
- 文件内容：
    - `TestMapper.java`: 测试用的数据库映射接口。

#### **`service`**
- 文件内容：
    - `TestService.java`: 测试用的业务逻辑接口。

#### **`serviceimpl`**
- 文件内容：
    - `TestServiceImpl.java`: 测试用的业务逻辑实现类。
