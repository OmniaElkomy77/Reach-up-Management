import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Linking,
    StatusBar,
    Modal,
    Dimensions,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get('window');
export default class Info extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>

                <StatusBar backgroundColor={'#fbe470'}></StatusBar>
             
                <View style={styles.HeaderStyle} >


                    <TouchableOpacity style={{ marginTop: "1%" }}>
                        <FontAwesome5
                            name={'arrow-left'}
                            size={20}
                            style={{ color: '#99999' }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.SettingText}> Terms and Conditions </Text>
                </View>

                <ScrollView style={{ flex: 1, paddingTop: "5%" }} selectable={true}>
              
                    <View style={styles.HeaderViewStyle}>
                        <Text style={styles.headingText} selectable={true}>
                            ضوابط وشروط وأحكام المستخدم لمنصة شحن أب
                        </Text>
                    </View>



                    <View style={styles.ViewStyle}>
                        <Text selectable={true} style={styles.ContentText} >
                            تمثل هذه الضوابط والشروط اتفاق رسمي "عقد" بين منصة
                            <Text style={styles.BoldText}>  شحن أب   </Text>
                             والعملاء المستخدمين لمنصة
                            <Text style={styles.BoldText}>  شحن أب.   </Text>

                        </Text>
                    </View>


                    <View style={styles.ViewStyle}>
                        <Text selectable={true} style={styles.ContentText} >
                            والذي هو عبارة عن منصة إلكترونية تسمح للمندوبين بتقديم خدمات التوصيل نيابة عن العملاء
                            والتوصيل إلى منازلهم أو في المواقع التي يتم تحديدها مسبقاً من العملاء، حيث يقوم
                         <Text style={styles.BoldText}>" شحن أب " </Text>
                           بإتاحة الفرصة للعميل لاختيار المندوب المناسب للقيام بعملية التوصيل.

                        </Text>
                    </View>


                    <View style={styles.ViewStyle}>
                        <Text style={styles.ContentText} >

                            أي إن استخدام من قبلك للخدمات التي توفرها منصة
                            <Text style={styles.BoldText}> شحن أب </Text>
                            يشكل موافقة منك على هذا العقد وأحكامه،
                            وتبعاً لذلك يجب عليك عدم استخدام المنصة
                            في حال لم تكن موافقاً على الأحكام والشروط الواردة في هذا العقد.

                        </Text>
                    </View>

                    <View style={styles.ViewStyle}>
                        <Text style={styles.ContentText} >
                            تحتفظ
                            <Text style={styles.BoldText}> شحن أب </Text>
                            بحق تعديل أو تغيير هذه الأحكام والشروط دون إخطار مسبق،
                            ويكون من مسؤوليتك كمستخدم للمنصة مراجعة ضوابط وشروط الاستخدام بشكل دوري لمعرفة التحديثات
                            التي تطرأ على الأحكام والشروط هذه، كما نأمل مراجعة سياسة
                            الخصوصية لدينا لمعرفة المزيد حول كيفية استخدام
                        <Text style={styles.BoldText}> شحن أب </Text>
                         للمعلومات التي تقدم لنا من قبل مستخدمي المنصة.


                        </Text>
                    </View>



                    <View style={styles.ViewStyle}>
                        <Text style={styles.BoldText} >
                            أحقية الحصول على الخدمات
                        </Text>
                    </View>


                    <View style={styles.ViewStyle}>
                        <Text style={styles.ContentText} >
                            أنت تقر وتضمن التالي:
                        </Text>
                    </View>


                    <View style={{ paddingRight: "5%" }}>
                        <Text style={styles.ContentText} >
                            <Text style={styles.BoldText}> 1. </Text>	أنه لم يسبق أن تم تعطيل استخدامك لخدمات شحن أب أو منعك من استخدامها في أي وقت من الأوقات.
                            </Text>
                        <Text style={styles.ContentText} >
                            <Text style={styles.BoldText}> 2. </Text>	أنك لست منافساً شحن أب ، كما أنك لا تقدم أي منتج منافس للخدمات المقدمة من شحن أب.
                            </Text>
                        <Text style={styles.ContentText} >
                            <Text style={styles.BoldText}> 3. </Text>	أنك تتمتع بكامل القوة والسلطة للتعاقد وأنك بذلك لن تكون منتهكاً لأي قانون أو عقد، وأنه لا يوجد عليك أي سوابق قضائية أو أوامر قبض أو مطالبات لدى الجهات الأمنية.
                            </Text>

                    </View>


                    <View style={styles.HeaderViewStyle}>
                        <Text style={styles.headingText}>
                            التعهدات والضمانات
                        </Text>
                    </View>


                    <View style={styles.ViewStyle}>
                        <Text style={styles.BoldText}> أنت تقر وتضمن بأنك سوف:</Text>


                        <Text style={styles.ContentText}> •	تمتثل لكافة القوانين واللوائح المعمول بها في جمهوريه مصر العربيه. </Text>
                        <Text style={styles.ContentText}> •	تقدم معلومات صحيحة ودقيقة إلى شحن أب وتقوم بتحديثها بشكل دوري. </Text>
                        <Text style={styles.ContentText}> •	تراجع وتمتثل لأي إشعارات يتم إرسالها من خلال شحن أب فيما يتعلق باستخدامكم للخدمات المقدمة من منصة شحن أب. </Text>
                        <Text style={styles.ContentText}> •	سوف تستخدم الخدمة أو المنصة لأغراض مشروعة فقط، ولن تستخدم الخدمات لشراء أواستلام أي مواد غير قانونية أو بهدف الاحتيال. </Text>
                        <Text style={styles.ContentText}> •	لن تستخدم الخدمة أو المنصة للتسبب بإيذاء أو مضايقة أو إزعاج أحد ما.</Text>
                        <Text style={styles.ContentText}> •	توافق على تبادل المعلومات بين الشركات داخل المنصة فيما يخص عملياتك المنفذة وتقييم التعاملات معك.</Text>
                        <Text style={styles.ContentText}> •	لن تعرقل التشغيل السليم لمنصة شحن أب.</Text>
                        <Text style={styles.ContentText}> •	لن تحاول إلحاق الضرر بالخدمة أو المنصة بأي شكل من الأشكال.</Text>
                        <Text style={styles.ContentText}> •	لن تنسخ أو توزع المنصة أو المحتويات الأخرى دون الحصول على إذن كتابي من شحن أب.</Text>
                        <Text style={styles.ContentText}> •	سوف تحافظ على كلمة المرور لحسابك أو أي وسيلة تعريف نقدمها لك وتتيح الدخول إلى حسابك، بشكلٍ آمن وسري.</Text>
                        <Text style={styles.ContentText}> •	سوف تقدم لنا كافة الدلائل التي تثبت هويتك وفقاً لتقدير شحن أب الخاص.</Text>
                        <Text style={styles.ContentText}> •	يحق لشحن أب رفض تقديم الخدمة أو استخدام المنصة دون إبداء أسباب.</Text>


                    </View>
                    <View style={[styles.HeaderViewStyle]}>
                        <Text style={styles.headingText}>
                        •	نطاق الترخيص 
                        </Text>
                    </View>
{/* 
                    <View style={styles.ViewStyle}>
                        <Text style={styles.ContentText} >
                        تحتفظ
                        <Text style={styles.BoldText}> شحن أب </Text>
                         بحقها، وبإرادتها المنفردة، بأن تقوم في أي وقت بالآتي:
                        </Text>
                    </View>

                    <View style={[styles.ViewStyle ,{paddingRight:"5%"}]}>
                        <Text style={styles.ContentText} >
                        •	تغيير الخدمات أو أي مواد مرتبطة بها؛ و/ أو إيقاف نشر خدماتها.
                        •	إذا قررت شحن أب إيقاف نشر خدماتها، فإنها قد تقوم بإرادتها باستبدال الخدمات بمواد أخرى مشابهة.

                        </Text>
                    </View>

                    <View style={[styles.HeaderViewStyle ]}>
                        <Text style={styles.headingText}>
                        حدود المسئولية:
                      </Text>
                    </View>

                    <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} >
                        لا تقدم شحن أب أي ضمانات،
                         واضحة أو ضمنية، تتعلق بالخدمات،
                          فهي جميعها يتم تقديمها "كما هي". وتخلي شحن أب مسئوليتها
                          بشكل واضح، إلى أقصى درجة ممكنة وفقاً للقانون، عن كافة 
                         الضمانات، وتشمل ولا تقتصر على، ضمانات الملائمة لغرض معين، 
                         الملائمة لمواصفات وأسواق معينة، وقابلية حقوق الملكية للبيع،
                          كما أن شحن أب لا تضمن دقة، أو محتوى، أو توقيت الخدمات
                          أو النتائج التي قد ينالها أو لا ينالها مستخدم الخدمات.
                          ولن تكون شحن أب أو وكلائها أو مانحي التراخيص أو الشركات
                          التابعة لها مسئولة في أي حال من الأحوال عن الأضرار المباشرة
                          أو غير المباشرة أو الجزاءات أو الأضرار الخاصة أو حدوث
                          أضرار عرضية أو تبعية (وتشمل على سبيل المثال لا الحصر،
                          الأضرار الناتجة عن خسارة الأرباح، تعطل الأعمال، فقدان 
                         معلومات الأعمال أو غيرها من الخسائر المالية) الناجمة
                          بشكلتاى مباشر أو غير مباشر عن الوصول إلى الخدمات
                          واستخدامها (أو الفشل في استخدامها) أو الاعتماد عليها.
                        </Text>
                    </View>

                    <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} >
                        لا يعتد بأي عروض أو إعلانات 
                        أو مسابقات لم يتم الإعلان عنها في موقع 
                        <Text style={styles.BoldText}>شحن أب  </Text>
                        الرسمي أو عبر وسائل التواصل
                         الاجتماعي التابعة والتي تدار من قبل 
                         <Text style={styles.BoldText}>شحن أب  </Text>
                         ولا يحق لك
                         مطالبة شحن أب بتنفيذها. بالإضافة إلى ذلك، ليس على
                         <Text style={styles.BoldText}>شحن أب  </Text>
                         أي مسؤولية تجاه أي عملية احتيال ارتكبت عن طريق عروض 
                        أو إعلانات أو مسابقات أقيمت بطريقة غير رسمية باسم 
                        <Text style={styles.BoldText}>شحن أب  </Text>
                        </Text>
                    </View>
                    <View style={[styles.HeaderViewStyle ]}>
                        <Text style={styles.headingText}>
                        الأمان:
                      </Text>
                    </View>

                    <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} >
                        إنك تقر بتحملك المسئولية منفرداً
                         عن خصوصية الخدمات، وتكون مسئولاً منفرداً عن استخدامها من قبل 
                        أي شخص آخر باستخدام حسابك و/أو اسم المستخدم أو كلمة المرور 
                        أو مسوغات الوصول الخاصة بك. كما أنك توافق على إخطار شحن اب 
                         إذا أصبحت على علم بأي خسارة، أو سرقة، أو استخدام غير مصرح
                         به لأي كلمة مرور، أو اسم مستخدم أو عنوان بروتكول الانترنت IP، 
                        أو غير ذلك من أساليب الوصول إلى الخدمات.
                        </Text>
                    </View>
                    <View style={[styles.HeaderViewStyle ]}>
                        <Text style={styles.headingText}>
                        الأمان:
                      </Text>
                    </View> */}

                    <View style={styles.ViewStyle}>
                        <Text style={styles.ContentText} >
                            تمنحك
                           <Text style={styles.BoldText}> شحن أب  </Text>
                            ترخيص غير حصري، وغير قابل للتحويل، وغير قابل للتنازل،
                            وغير قابل للترخيص من الباطن وغير قابل للإلغاء وذلك للحصول على خدماتنا
                            واستخدامها فقط للغرض الشخصي
                            (ليس لأي أغراض تجارية على سبيل المثال لا الحصر) وفقاً لهذا العقد، لذا يجب عليك:
                        </Text>
                    </View>

                    <View style={styles.ViewStyle}>


                        <Text style={styles.Content_Text_With_Margin_Right}>  •	عدم إتاحة الخدمات أوتأجير، أواستئجار أوتخصيص أوإعادة بيع، أو توزيع أو ترخيص من الباطن لهذه الخدمات إلى أي طرف ثالث.</Text>
                        <Text style={styles.Content_Text_With_Margin_Right}>  •	عدم تعديل، أو اجتزاء، أو ترجمة، أو تلخيص، أو إنشاء عمل فرعي يقوم على فك، أو تنفيذ هندسة عكسية لتصميم منصة شحن أب أو خلاف ذلك من تحديد أو محاولة تحديد أو محاولة الوصول إلى شفرة المصدر أو التصميم الداخلي للخدمات أو أي نص، أو صور الوسائط المتعددة (صور، صوتيات، ملفات فيديو)،  أو البيانات أو غيرها من المعلومات التي تقدمها شحن أب أو الطرف الثالث من مقدمي الخدمة.</Text>
                        <Text style={styles.Content_Text_With_Margin_Right}> •	عدم حذف، أو تغيير، أو غير ذلك من التعديل على أي حق من حقوق النشر أو غيرها من الإخطارات الرسمية الواردة في الخدمات.</Text>
                        <Text style={styles.Content_Text_With_Margin_Right}> •	 عدم تعمد نقل، أو توزيع الخدمات، أو السماح بتحميل الخدمات للاستخدام بخلاف ما هو محدد هنا.</Text>
                        <Text style={styles.Content_Text_With_Margin_Right}> •	عدم السماح بمشاركة اسم المستخدم/ أو كلمة المرور أو غيرها من مسوغات الوصول إلى خدمات شحن أب.</Text>
                        <Text style={styles.Content_Text_With_Margin_Right}> •	وكجزء من سياسة الشحن الخاصة بخدمة شحن أب يحظر على المستخدمين ومندوبين التوصيل إرسال أو تلقي أو استلام الفئات التالية من المواد والمنتجات وما يتعلق بها، ويتوجب عليك بفتح أي ارسالية والتأكد من سلامتها وموافقتها للشروط.</Text>

                    </View>


                    <View style={styles.TableStyle}>

                        {/** ///////////////// Row 1 /////////////// */}
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.LeftColumnYellow}>

                                <View>
                                    <Text style={styles.BoldText}>أمثلة للمنتجات والأصناف </Text>
                                </View>

                            </View>
                            <View style={styles.RightColumnYellow}>

                                <View>

                                    <Text style={styles.BoldText}>الفئات </Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 2 /////////////// */}

                        <View style={{ flexDirection: "row" }}>
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >المشروبات الروحية والمسكرة، النبيذ، الشمبانيا، البيرة وغيرها.</Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.1 }
                                ]}>

                                    <Text style={styles.BoldText}> الكحول </Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 3 /////////////// */}

                        <View style={{ flexDirection: "row" }}>
                            <View style={
                                styles.LeftColumnWhite
                            }>

                                <View>
                                    <Text >أجزاء الحيوانات، الدماء أو السوائل الأخرى، الأعشاب الضارة،
                                    البذور المحظورة،  النبات وأي مواد عضوية أخرى
                                    (تشمل المشتقات الإنتاجية) المعرضة لخطر الانقراض
                                         أو التي يمنع الاتجار فيها بموجب القانون.</Text>
                                </View>

                            </View>
                            <View >

                                <View style={
                                    styles.RightColumnWhite
                                }>

                                    <Text style={[
                                        styles.BoldText,
                                        { height: height * 0.13, marginTop: "50%" }
                                    ]}> الحيوانات والأجناس المحظورة </Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 4/////////////// */}
                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >المواد الإباحية أو تلك التي من الممكن أن تشكل استغلالاً جنسياً للأطفال.
                                        </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.1 }

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> المواد الإباحية</Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 5/////////////// */}
                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text > النسخ غير القانونية من الكتب والموسيقى والأفلام واي مواد
                                    أخرى مرخصة ومحمية بما في ذلك النسخ التي تتعدى على حقوق الملكية والنسخ غير
                                    القانونية من التطبيقات والبرامج وألعاب الفيديو وأي مواد أخرى مرخصة
                                    ومحمية مثل التطبيقات الأصلية أو البرامج الحزمية أو المنتجات الأخرى
                                          التي تمكن من إرسال رسائل مجهولة المصدر إلى البريد الإلكتروني.</Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.4 }

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> المواد والتطبيقات المحمية بحقوق ملكية</Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 6/////////////// */}

                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                        السلع أو التصميمات المقلدة،
                                        المواد غير الموقعة من المشاهير والتي تحتاج في العادة إلى مثل هذا التوقيع،
                                        التوقيعات المزورة، العملات
                                        والطوابع وغيرها من السلع التي قد تكون غير قانونية.
                                          </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.2}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>السلع المقلدة وغير القانونية</Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 7 /////////////// */}
                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                        أي شرائح أو أجهزة أخرى تستخدم لتجاوز الحماية التقنية
                                        على الأجهزة الرقيمة بما في ذلك أجهزة فك شفرات هواتف الآيفون.
                                          </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.17 }

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>الأجهزة والآليات المستخدمة في فك أو اختراق الحماية التقنية</Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 8 /////////////// */}

                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                        أالمواد المحظورة  والمخدرات والأدوية غير القانونية ومعدات التحضير بما
                                        في ذلك الحبوب العشبية مثل السالفيا والفطر السحري
                                        والمواد التي تروج لاستخدام مثل هذه المنتجات؛ أو المواد
                                        القانونية مثل النباتات والأعشاب بطريقة تقتضي هضمها
                                        أو استنشاقها او استخلاص أي مواد غير قانونية منها
                                        تؤدي نفس أثر المخدرات أو المواد غير القانونية
                                        أو التي تدعي تحقيق فوائد صحية دون إثبات أو برهان.
                                          </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.4 }

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> المخدرات ومعداتها</Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 9 /////////////// */}
                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                        تذاكر اليانصيب والمراهنات الرياضية وعضويات مواقع
                                        القمار على الشبكة وأي محتوى متعلق بذلك.
                                          </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.1 }

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> الألعاب والقمار</Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 10 /////////////// */}

                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                        الأدلة والتوجيهات والمعلومات والمتطلبات التي تخالف
                                        القانون من خلال التخريب أو السماح بالوصول غير القانوني إلى التطبيقات والبرامج
                                        والأجهزة الخادمة ومواقع الإنترنت أو أي ممتلكات أخرى محمية.
                                          </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.3 }

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> مواد القرصنة الإلكترونية </Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 11 /////////////// */}
                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                        الأعضاء البشرية أو أي أجزاء من الجسم والسوائل والخلايا الجذعية والأجنة.
                                          </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.1 }

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>الأعضاء البشرية </Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 12 /////////////// */}
                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                        المواد والمنتجات والمعلومات التي تروج لسلع غير قانونية
                                        أو تمكن من تنفيذ أفعال غير قانونية؛
                                        السلع التي لا تملكها أو ليس لك الحق في بيعها؛ السلع التي يتم إنتاجها
                                        بالتعدي على حقوق ملكية لجهات أخرى؛ السلع المهربة والسلع التي
                                        تخالف أنظمة الاستيراد والتصدير والديباجات؛ السيارات الخاضعة
                                        لقيود النقل؛ السلع المسجلة في السجلات العامة (مثل العقارات)
                                        والتي يتطلب نقلها إجراءات رسمية لا يمكن إنجازها على الشبكة.
                                        وتكون أنت والعميل مسؤولين مسؤولية كاملة عن التحقق من
                                        أن جميع المواد التي تقومون ببيعها قانونية ومصرح بها.
                                          </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.55}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>السلع غير القانونية والمسروقة </Text>
                                </View>

                            </View>
                        </View>
                        {/** ///////////////// Row 13 /////////////// */}
                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >الأجهزة المعدة لالتقاط إشارات الأقمار الصناعية والكابلات مجاناً
                                    وأجهزة فك شفرة البث الكابلي وبطاقات التشفير وأجهزة برمجة
                                    بطاقات التشفير والمعدات والمنتجات غير القانونية التي
                                    تستخدم في تعديل الهواتف الخليوية وغيرها من المعدات
                                    التي تعتبر غير قانونية بموجب أنظمة هيئة الاتصالات
                                    أو أي جهة منظمة في البلد التي تعرض فيها تلك السلع.
                                          </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.4}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>معدات الاتصالات غير القانونية </Text>
                                </View>

                            </View>


                        </View>
                        {/** ///////////////// Row 14 /////////////// */}
                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                        العلاجات والأدوية غير المثبتة أو المواد التي يتم تسويقها
                                        على أنها علاج سريع وناجع للمشكلات الصحية.
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.2 }

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>الأدوية الخارقة  </Text>
                                </View>

                            </View>


                        </View>
                        {/** ///////////////// Row 15 /////////////// */}

                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                        السلع والمواد الأدبية والمنتجات أو أي مواد أخرى تعمل على
                                        
                                        تشويه السمعة والتشهير بأي شخص أو مجموعة من الأشخاص على أساس العرق أو البلد أو الدين أو النوع أو أي عامل آخر.

                                        تشويه السمعة والتشهير بأي شخص أو مجموعة أشخاص محمية من التشهير وتشويه السمعة بموجب القانون السائد (مثل الحماية المتوفرة للأسر الحاكمة في بعض المناطق).
                                        التحريض على أو تشجيع الأفعال العنيفة.
                                        الترويج للتعصب والكراهية.
                                        الترويج للانتماء إلى المجموعات الإرهابية أو أي منظمات أخرى محظورة بموجب القانون.
                                        الترويج للنظريات التعديلية المحددة بموجب القانون.
                                        تنافي الضوابط الأخلاقية السائدة.

                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.6}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>السلع غير اللائقة   </Text>
                                </View>

                            </View>

 
                        </View>
                           {/** ///////////////// Row 16 /////////////// */}

                           <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    المشاهد والصور والمواد الإجرامية مثل المتعلقات الشخصية المرتبطة بالجرائم أو الأفعال الإجرامية.

                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.1}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> السلع العدوانية والإجرامية </Text>
                                </View>

                            </View>

 
                        </View>
                        {/** ///////////////// Row 16 /////////////// */}
                        <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    البيع بكميات كبيرة للمعادن والأحجار النادرة أو الثمينة.
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.1}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> المواد الثمينة </Text>
                                </View>

                            </View>

 
                        </View>
                            {/** ///////////////// Row 17 /////////////// */}

                            <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    المواد التي يشملها ميثاق اليونسكو لعام
                                     1970م بخصوص وسائل منع وحماية الاستيراد والتصدير
                                      والنقل غير المشروع لملكية الممتلكات الثقافية
                                      أو الممنوع بيعها أو تصديرها أو نقل ملكيتها
                                      بموجب القانون؛ المشغولات اليدوية والتكوينات 
                                     الكهفية والمواد المتعلقة بالمدافن والمحمية
                                      بموجب القانون الفيدرالي مثل قانون حماية الموارد 
                                     الكهفية لعام 1988م وقانون حماية المدافن الأمريكية.
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.4}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> المواد الثقافية والمشغولات اليدوية المحمية </Text>
                                </View>

                            </View>

 
                        </View>
                                       {/** ///////////////// Row 18 /////////////// */}
                            <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    الألعاب النارية والسلع المتعلقة بها التي تعتبر
                                     في الأسواق التي تباع فيها: سامة، قابلة للاشتعال أومشعة ومواد 
                                     مثل البارود والمواد المتفجرة والبنزين وعبوات البروبان.
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.17}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>  أجهزة الألعاب النارية والمواد الخطرة</Text>
                                </View>

                            </View>

 
                        </View>
                            {/** ///////////////// Row 19 /////////////// */}

                            <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    االأكياس الهوائية؛ البطاريات التي تحتوي على الزئبق؛
                                     الفيرون ومواد التبريد المماثلة؛ المذيبات 
                                     الكيماوية والصناعية؛ العمليات الطبية؛ لوحات أرقام 
                                     السيارات؛ ديباجات الشرطة ومعدات سلطات تطبيق القانون؛
                                      أجهزة فتح الأقفال؛ الأجهزة الطبية؛ المبيدات الحشرية؛
                                      معدات اللياقة والمحفزات الكهربائية؛ 
                                     المواد المسترجعة؛ معدات التفتيش والمراقبة 
                                     المستخدمة بشكل أساسي للتنصت على المكالمات الشهفية
                                      أو الإلكترونية بشكل غير قانوني أو التمكين من 
                                     التنصت غير القانوني على الأشخاص وتسجيل مكالماتهم؛
                                      السلع الخاضعة للرقابة من قبل الحكومة أو أي سلطات أخرى.
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.6}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> السلع الخاضعة لضوابط معينة</Text>
                                </View>

                            </View>

 
                        </View>
                         {/** ///////////////// Row 20 /////////////// */}
                         
                    

                         {/** ///////////////// Row 21 /////////////// */}
                         <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    اأجهزة التشويش على الرادار،
                                     أغطية لوحات السيارات،
                                      أجهزة تغيير 
                                      إشارات المرور وغيرها من المنتجات ذات الصلة. 
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.2}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> أجهزة السلطات المرورية</Text>
                                </View>

                            </View>

 
                        </View>
                              {/** ///////////////// Row 22 /////////////// */}
                              <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    الأسلحة، الذخيرة وأي مواد أخرى تشمل، 
                                    دون حصر، الأسلحة والسكاكين المخفاة وصعبة الكشف والأسلحة  التي
                                     تأخذ شكل قطع فنية وكاتمات الصوت وخزائن الذخيرة 
                                    والأسلحة الرشاشة الخفيفة والغاز المسيل للدموع.
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.3}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> الأسلحة</Text>
                                </View>

                            </View>
                           
 
                        </View>
                            {/** ///////////////// Row 23 /////////////// */}
                            <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    العملات المخفضة أو تداول العملات والعملات المدعومة بالمعادن الثمينة.
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.1}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> البيع الإجمالي للعملات</Text>
                                </View>

                            </View>
                       
                        </View>
                            {/** ///////////////// Row 24 /////////////// */}
                            <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    يكون لدينا الحق في رفض تقديم الخدمة لجميع الأطفال دون الثامنة عشرة
                                    . وإضافةً إلى ذلك يكون لدينا الحق في رفض التوصيل 
                                    إلى أي موقع داخل أو حول المدارس الابتدائية أو المتوسطة.
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.2}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}> التوصيل للأطفال في سن الدراسة الابتدائية أو المتوسطة أو دون ذلك</Text>
                                </View>

                            </View>
                       
                        </View>
                            {/** ///////////////// Row 25 /////////////// */}
                            <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    نرفض بشكل كامل أي لغة مسيئة أو سلوك سيء تجاه الشركة 
                                    و/أو الخدمة التي نقدمها و/أو أيٍ من موظفينا و/أو أيٍ من 
                                    المراسيل العاملين معنا. إذا تقرر بناءً على تقديرنا استخدام
                                     أي عميل للغة مسيئة للشركة و/أو الخدمة و/أو الموظفين و/أو
                                     المراسيل فسيؤدي ذلك إلى إغلاق حساب العميل بشكل نهائي دون رد 
                                    أي مبالغ مستحقة. ويعتبرهذا تهديد بالمقاضاة أو التشهير أو القدح.
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.4}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>سوء استخدام المنصة البرمجية</Text>
                                </View>

                            </View>
                       
                        </View>
                         {/** ///////////////// Row 26 /////////////// */}
                         <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    تعتبر الأشياء التالية ممنوعة أيضاً: بطاقات الدفع المسبق،
                                     بطاقات الهدايا، تصاريح المرور، المجموعات المالية (الطوابع، النقود وغيرها).
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.2}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>مواد مختلفة</Text>
                                </View>

                            </View>
                       
                        </View>
                            {/** ///////////////// Row 27 /////////////// */}

                            <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    نقل الأشخاص داخل المدينة
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.1}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>خدمات التاكسي</Text>
                                </View>

                            </View>
                       
                        </View>
                            {/** ///////////////// Row 28 /////////////// */}
                            <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    الأشياء الكبيرة التي لا تناسب السيارة الصغيرة والأشياء التي يتجاوز وزنها 40 كيلوجرام.
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.1}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>المواد الثقيلة والضخمة</Text>
                                </View>

                            </View>
                       
                        </View>
                        
                            {/** ///////////////// Row 29 /////////////// */}
                                     
                            <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    الأشياء التي تتجاوز قيمتها 10000 جم
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.1}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>الأشياء الفاخرة والثمينة</Text>
                                </View>

                            </View>
                       
                        </View>
                             {/** ///////////////// Row 30 /////////////// */}

                             <View style={{ flexDirection: 'row' }} >
                            <View style={[
                                styles.LeftColumnWhite,

                            ]}>

                                <View>
                                    <Text >
                                    أي نوع من الحيوانات
                                    </Text>
                                </View>

                            </View>
                            <View >

                                <View style={[
                                    styles.RightColumnWhite,
                                    { height: height * 0.1}

                                ]}>

                                    <Text style={{ width: "97%", fontWeight: "bold" }}>الحيوانات</Text>
                                </View>

                            </View>
                       
                        </View>
                        
                    </View>

           {/**-------------------------------------------------------------------------------------------- */}

           <View style={styles.HeaderViewStyle}>
                        <Text style={styles.headingText} selectable={true}>
                        •	 خرق سياسة الشحن:
                        </Text>
            </View>

            <View style={styles.ViewStyle}>
                        <Text selectable={true} style={styles.ContentText} >
                        تحتفظ 
                        <Text style={styles.BoldText}> شحن أب </Text>شحن أب 
                        بالحق في السعي لتنفيذ أي معالجات متاحة 
                        لأي خرق لسياسة الشحن ويشمل ذلك، دون حصر، 
                        الحق في حجب إمكانية الوصول إلى خدمات وبرامج
                        <Text style={styles.BoldText}> شحن أب.</Text> 

                        </Text>
             </View>


             <View style={[styles.HeaderViewStyle,{height:height*0.07} ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        حقوق الملكية الفكرية
                        </Text>
            </View>
                    
            <View style={styles.ViewStyle}>
                        <Text selectable={true} style={styles.ContentText} >
                        جميع حقوق الملكية الفكرية لهذه المنصة 
                        وكافة المواد المتعلقة بها أو التي تظهر
                         عليها (وتشمل أي محتوى تقوم
                         <Text style={styles.BoldText}> شحن أب </Text>  
                          بتقديمه
                         أو بإدراجه وكامل المحتوى الذي يتم تحميله
                         على المنصة من قبل
                         <Text style={styles.BoldText}> شحن أب </Text> 
                         ) هو ملكية لـ
                         <Text style={styles.BoldText}> شحن أب </Text> 
                         ، ويحق لـ
                         <Text style={styles.BoldText}> شحن أب </Text> 
                          التصرف في هذه الملكية
                         كيفما تشاء. ويجب عليك ألا تقوم بإعادة إنتاج 
                        أو السماح لأي شخص، لأي سبب من الأسباب، باستخدام
                         أو إعادة إنتاج الخدمات أو أي علامات تجارية
                         أو غيرها من الأسماء التجارية التي تظهر في الخدمات.

                        </Text>
             </View>



             <View style={[styles.HeaderViewStyle,{height:height*0.07} ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        الدفع
                        </Text>
            </View>

 
            <View style={styles.ViewStyle}>
                        <Text selectable={true} style={styles.ContentText} >
                        تحتفظ
                        <Text style={styles.BoldText}> شحن أب </Text> 
                         لنفسها بالحق في فرض رسوم جديدة على استخدام المنصة أو الخدمة أو كليهما. إذا قررت
                         <Text style={styles.BoldText}> شحن أب </Text> 
                          فرض رسوم جديدة، فإنه سيتم إفادتك بذلك
                         وسيتم السماح لك بالاستمرار في العقد أو إنهائه.
                        يتوجب عليك دفع قيمة الخدمات
                         إلى مقدم الخدمة نقدا فور تقديم الخدمة لك. وتتحمل وحدك المسؤولية
                          القانونية المترتبة على عدم دفع قيمة الخدمات والمشتريات حال استلامها.
                          يحق 
                          <Text style={styles.BoldText}> شحن أب </Text>  
                          حظر العميل في حال عدم دفع القيمة 
                        المستحقة للخدمة  المقدمة من قبل مقدم الخدمة علماً بإن 
                        <Text style={styles.BoldText}> شحن أب </Text> 
                          لن تقوم بإزالة الحظر عن العميل إلى حين سداد رسوم الخدمة المستحقه.


                        </Text>
             </View>
             <View style={[styles.HeaderViewStyle,{height:height*0.07} ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        التعويض:
                        </Text>
            </View>


            <View style={styles.ViewStyle}>
                        <Text selectable={true} style={styles.ContentText} >
                        بموافقتك على شروط المستخدم الماثلة واستخدام المنصة
                         أو الخدمة، فإنك توافق على الدفاع عن شحن أب 
                         والشركات التابعة لها والجهات المرخِّصة لها وكل مسؤول 
                         من مسؤوليها ومديريها وغيرهم من المستخدمين والموظفين 
                         والمحامين والوكلاء وعدم إلحاق الضرر بهم وإبراء ذمتهم من
                          أي مطالبات وتكاليف وأضرار وخسائر ومسؤوليات ومصروفات 
                         (بما في ذلك أتعاب وتكاليف المحاماة) تنشأ عن أو ترتبط بما يلي: 


                        </Text>

                        <View style={{paddingRight:"5%"}}>
                           
                                 <Text style={styles.ContentText}>
                             <Text style={styles.BoldText}>1.  </Text>,	انتهاكك أو مخالفتك لأي شرط من شروط المستخدم الماثلة هذه أو لأي قانون أو لوائح معمول بها، سواء أشير إليها في شروط وأحكام الاستخادم هذه ام لا،
                             </Text>
                             <Text style={styles.ContentText}>
                             <Text style={styles.BoldText}>2.</Text>انتهاكك لأي حقوق تخص الغير، بما في ذلك مُقدمي الخدمات الذين ينظمهم المنصة،
                             </Text>
                             <Text style={styles.ContentText}>
                             <Text style={styles.BoldText}>3. </Text>	استخدامك أو إساءة استخدامك للمنصة أو الخدمة.
                             </Text>
                        
                        </View>
             </View>
             <View style={[styles.HeaderViewStyle,{height:height*0.07} ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        المسؤولية القانونية
                        </Text>
            </View>

            <View style={styles.ViewStyle}>
                           
                           <Text style={styles.ContentText}>
                           المعلومات والتوصيات والخدمات أو أي منها التي
                            قُدمت لك على أو من خلال موقع الويب والخدمة والمنصة 
                           هي لأغراض المعلومات العامة فقط ولا تمثل أي نصيحة
                            ستحافظ شحن أب قدر الإمكان على صحة وتحديث الموقع 
                           والمنصة ومحتوياته، لكنها لا تضمن أن (محتويات) الموقع
                            أو المنصة خالية من الأخطاء والعيوب والبرامج الضارة
                            .والفيروسات ولا تضمن صحة ودقة وتحديث موقع الويب والمنصة

          </Text>
  
          </View>
          <View style={styles.ViewStyle} ><Text style={styles.ContentText}>
                            لا تتحمل شحن أب المسؤولية عن أي أضرار تنتج عن 
                            استخدام (أو عدم القدرة على استخدام) الموقع أو المنصة، 
                            بما في ذلك الأضرار التي تسببها البرامج الضارة
                             أو الفيروسات، كما لا تتحمل مسؤولية عدم صحة أو عدم 
                            اكتمال المعلومات
                             أو موقع الويب أو المنصة، ما لم يكن هذا الضرر ناتج
                             عن سوء سلوك عمدي أو عن إهمال جسيم من جانب شحن أب.

                             </Text>
             </View>       
             <View style={styles.ViewStyle} ><Text style={styles.ContentText}>
                            تقع مسؤولية جودة 
                            الخدمات المطلوبة باستخدام المنصة أو الخدمة بأكملها 
                            على عاتق مقدم الخدمة  "المندوب" الذي يقدم لك الخدمة
                             في النهاية . لا تقبل شحن أب تحت أي ظرف من الظروف أي 
                            مسؤولية تتعلق بالخدمات التي يقدمها المندوب أو تنشأ عنه
                            ، كما لا تقبل المسؤولية عن أي أفعال أو تصرفات أو سلوك
                             أو إهمال، أو جميع ما سبق، من جانب المندوب ومن ثم، فإن
                             أي شكاوى بشأن الخدمات ينبغي تقديمها على المندوب.
                        
                             </Text>
             </View>               
             <View style={[styles.HeaderViewStyle]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        تعديل الخدمات:
                        </Text>
            </View>

            <View style={styles.ViewStyle} ><Text style={styles.ContentText}>
            تحتفظ شحن أب بحقها، وبإرادتها المنفردة، بأن تقوم في أي وقت بالآتي:
                             </Text>
             </View>  
             <View style={[styles.ViewStyle , {paddingRight:"5%"}]} >
            <Text style={styles.ContentText}>
             •	تغيير الخدمات أو أي مواد مرتبطة بها؛ و/ أو إيقاف نشر خدماتها.
             </Text>
             <Text style={styles.ContentText}>
             •	إذا قررت شحن أب إيقاف نشر خدماتها، فإنها قد تقوم بإرادتها باستبدال الخدمات بمواد أخرى مشابهة.
             </Text>
                          
             </View>  

             <View style={[styles.HeaderViewStyle]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        حدود المسؤوليه:
                        </Text>
            </View>

            <View style={[styles.ViewStyle , {paddingRight:"5%"}]} >
            <Text style={styles.ContentText}>
                
            لا تقدم شحن أب أي ضمانات، واضحة أو ضمنية، تتعلق بالخدمات،
             فهي جميعها يتم تقديمها "كما هي". وتخلي شحن أب مسئوليتها بشكل
              واضح، إلى أقصى درجة ممكنة وفقاً للقانون، عن كافة الضمانات،
              وتشمل ولا تقتصر على، ضمانات الملائمة لغرض معين، الملائمة
              لمواصفات وأسواق معينة، وقابلية حقوق الملكية للبيع، كما
              أن شحن أب لا تضمن دقة، أو محتوى، أو توقيت الخدمات أو النتائج 
             التي قد ينالها أو لا ينالها مستخدم الخدمات. ولن تكون
              شحن أب أو وكلائها أو مانحي التراخيص أو الشركات التابعة
              لها مسئولة في أي حال من الأحوال عن الأضرار المباشرة 
             أو غير المباشرة أو الجزاءات أو الأضرار الخاصة أو حدوث
              أضرار عرضية أو تبعية (وتشمل على سبيل المثال لا الحصر،
              الأضرار الناتجة عن خسارة الأرباح، تعطل الأعمال، فقدان
              معلومات الأعمال أو غيرها من الخسائر المالية) الناجمة 
             بشكلتاى مباشر أو غير مباشر عن الوصول إلى الخدمات
              واستخدامها (أو الفشل في استخدامها) أو الاعتماد عليها.
             </Text>
                          
             </View>  





             <View style={[styles.ViewStyle , {paddingRight:"5%"}]} >
            <Text style={styles.ContentText}>
             لا يعتد بأي عروض أو إعلانات أو مسابقات لم يتم الإعلان عنها في موقع شحن أب 
             الرسمي أو عبر وسائل التواصل الاجتماعي التابعة 
             والتي تدار من قبل شحن أب ولا يحق لك مطالبة شحن أب بتنفيذها.
              بالإضافة إلى ذلك، ليس على شحن أب أي مسؤولية تجاه 
             أي عملية احتيال ارتكبت عن طريق عروض أو إعلانات
              أو مسابقات أقيمت بطريقة غير رسمية باسم شحن أب.
            </Text>
            </View>

            <View style={[styles.HeaderViewStyle ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        الأمان:
                        </Text>
            </View>



            <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} >
                        إنك تقر بتحملك المسئولية منفرداً
                         عن خصوصية الخدمات، وتكون مسئولاً منفرداً عن استخدامها من قبل 
                        أي شخص آخر باستخدام حسابك و/أو اسم المستخدم أو كلمة المرور 
                        أو مسوغات الوصول الخاصة بك. كما أنك توافق على إخطار شحن اب 
                         إذا أصبحت على علم بأي خسارة، أو سرقة، أو استخدام غير مصرح
                         به لأي كلمة مرور، أو اسم مستخدم أو عنوان بروتكول الانترنت IP، 
                        أو غير ذلك من أساليب الوصول إلى الخدمات.
                        </Text>
                    </View>


                    <View style={[styles.HeaderViewStyle ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        مدة العقد وإنهاؤه
                        </Text>
                    </View>
                    <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} >
                    يكون العقد المُبرم بينك وبين شحن أب غير محدد المدة
                    . ويحق لك إنهاء العقد في أي وقت بحذف المنصة
                     المُثبّت على هاتفك الذكي حذفًا نهائيًا، وبذلك تعطل استخدامك للمنصة 
                    والخدمة. يمكنك أن تغلق حساب المستخدم الخاص بك في أي وقت.

                    </Text>
                    </View>
                    <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} >
                        يحق لـ شحن أب  إنهاء العقد بأثر فوري في أي وقت
                         (بتعطيل استخدامك للمنصة والخدمة)، وذلك في حالة قيامك بأي مما يلي: (أ) 
                         انتهاك أو خرق أي شرط من شروط المُستخدم،
                          (ب) إذا رأت  شحن أب أنك تسيء
                          استخدام المنصة أو الخدمة. 
                        </Text>
                    </View>

                    <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} >
                        إن شحن أب غير ملزمة بإرسال سابق إخطار بإنهاء العقد.
                        </Text>
                    </View>


                    <View style={[styles.HeaderViewStyle ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        بطلان حكم أو أكثر
                        </Text>
            </View>

            <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} >
                        لا يؤثر بطلان أي حكم من أحكام شروط المستخدم الماثلة على صحة باقي الأحكام الأخرى الواردة فيها.
                        </Text>
                    </View>

                    <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} >
                        في حالة وجود أي حكم باطل في شروط المستخدم الماثلة 
                        أو وجود حكم غير مقبول في ظروف معينة وفقًا لمعايير المعقولية والعدالة وإلى هذا المدى فقط، 
                        يُعمل بدلاً منه بين الطرفين بحكم يكون مقبولاً مراعاةً لجميع 
                        الظروف ويتوافق مع أحكام الشرط الباطل قدر الإمكان، 
                        مع مراعاة محتوى شروط المستخدم الماثلة وغرضها.
                        </Text>
                    </View>


                    <View style={[styles.HeaderViewStyle ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        تعديل الخدمة وشروط المستخدم
                        </Text>
            </View>

            <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} >
                        تحتفظ شحن أب لنفسها بالحق، وفقًا لتقديرها وحدها، في تعديل أي شرط من شروط المستخدم الماثلة 
                        أو استبداله، أو تغيير الخدمة أو المنصة أو تعليقهما أو إيقافهما 
                        (بما في ذلك على سبيل المثال لا الحصر، توفير أي ميزة أو قاعدة بيانات 
                        أو محتوى) في أي وقت، وذلك بنشر إخطار على الموقع أو بإرسال
                         إخطار لك من خلال الخدمة أو المنصة أو عبر البريد الإلكتروني.
                         كما يجوز لـ شحن اب  أن تضع قيودًا على ميزات وخدمات مُعيَّنة
                         أو تقصر وصولك إلى أجزاء من الخدمة أو الخدمة بأكملها دون إخطار أو مسؤولية.
                        </Text>
                    </View>



                    <View style={[styles.HeaderViewStyle ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        الإخطار
                        </Text>
            </View>

            <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} >
                        يجوز لشحن أب أن ترسل إخطارًا عن طريق إرسال إخطار عام عن الخدمة أو المنصة،
                         أو بإرسال بريد إلكتروني إلى عنوانك البريدي المُسجل في معلومات الحساب لدى شحن أب ،
                          أو بإرسال مكاتبة بالبريد العادي على عنوانك المسجل في معلومات الحساب لدى شحن أب.
                        </Text>
                    </View>

                    <View style={[styles.HeaderViewStyle ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        القانون المعمول به وحل النزاعات
                        </Text>
            </View>


            <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} > 
                        تخضع شروط المستخدم الماثلة ويطبق على تسوية أي نزاع أو مطالبة أو خلاف ينشأ عن شروط المستخدم الماثلة أو يتعلق بها أو أي انتهاك لها أو إنهائها أو تنفيذها أو تفسيرها أو صحتها أو استخدام الموقع أو الخدمة أو المنصة، للقوانين والأنظمة المطبقة في جمهوريه مصر العربيه وتفسر وفقا لها.
 

                        </Text>
                    </View>



            <View style={[styles.HeaderViewStyle ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        ضوابط وشروط مقدم الخدمات لتطبيق " شحن أب "
                        </Text>
            </View>


            

            <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} > 
                        تمثل هذه الضوابط والشروط اتفاق رسمي "عقد" بين مؤسسة شحن أب المالك للعلامة التجارية " شحن أب " ومقدمي خدمات التوصيل (المناديب) وتحكم شروط مقدم الخدمة هذه استخدامكم لتطبيق " شحن أب " والذي هو عبارة عن منصة إلكترونية تسمح للمندوبين بتقديم خدمات التوصيل نيابة عن العملاء والتوصيل إلى منازلهم أو في المواقع التي يتم تحديدها مسبقاً من العملاء، حيث يقوم " شحن أب " بإتاحة الفرصة للعميل لاختيار المندوب المناسب للقيام بعملية التوصيل. 
 

                        </Text>
                    </View>


                    
                    <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} > 
                        إن اي استخدام من قبلك للخدمات التي يوفرها تطبيق “شحن أب” يشكل موافقة منك على هذا العقد وأحكامه وتبعاً لذلك يجب عليك عدم استخدام التطبيق في حال لم تكن موافقاً على الأحكام والشروط الواردة في هذا العقد. 

                        </Text>
                    </View>

                    <View style={[styles.ViewStyle]}>
                        <Text style={styles.ContentText} > 
                        تحتفظ “شحن أب” بحق تعديل او تغيير هذه الأحكام والشروط دون إخطار مسبق , ويكون من مسؤوليتك كمستخدم للتطبيق مراجعة ضوابط وشروط الاستخدام بشكل دوري لمعرفة التحديثات التي تطرأ على الأحكام والشروط هذه, من خلال الرابط                    كما نأمل مراجعة سياسة الخصوصية لدينا لمعرفة المزيد حول كيفية استخدام “شحن أب” للمعومات التي تقدم لنا من قبل مستخدمي التطبيق.
                        </Text>
                    </View>
                     
                    <View style={[styles.ViewStyle]}>
                        <Text style={{fontSize:20,fontWeight:"bold"}} > 
                        أحقية الحصول على الخدمات  </Text>
                    </View>
                   
                    <View style={[styles.ViewStyle]}>
                        <Text style={{fontSize:17,fontWeight:"bold"}} > 
                        أنت تقر وتضمن التالي:
                        </Text>
                    </View>
                    <View style={[styles.ViewStyle, {paddingRight:"5%"}]}>
                        <Text style={styles.ContentText} > 
                        •	أنه لم يسبق أن تم تعطيل استخدامك لخدمات " شحن أب " أو منعك من استخدامها في اي وقت من الأوقات.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	أنك لست منافساً ل” شحن أب”, كما أنك لا تقدم اي منتج منافس للخدمات المقدمة من “شحن اب ”.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	أنك تتمتع بكامل القوة والسلطة للتعاقد وانك بذلك لن تكون منتهكاً لأي قانون أو عقد.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	أنك طرف مستقل ولا تعمل كوكيل أو ممثل أو موزع أو شريك شحن أب. لا يجوز لك، بشكل مباشر أو غير مباشر، تقديم نفسك كممثل لشركة شحن أب أو التصرف بطريقة قد تحمل أو تنشئ التزامات دون موافقة كتابية مسبقة من شحن أب. إذا تم منح الموافقة، حدود تصرفك تقتصر على الأعمال التي تسمح لك بتنفيذ الخدمة المقدمة فقط. كما أنه ليس لك أي حق في تقديم أي عروض للمستخدمين نيابة عن شحن أب ، وأنت تقر بأن خرقك لهذا البند سوف يجعلك مسؤولا مسؤولية كاملة عن جميع الالتزامات الناشئة عن هذا الخرق ويعرضك للملاحقة الجنائية وحظر استخدامك للمنصة.
                        </Text>
 

                    
                    </View>

                    <View style={[styles.HeaderViewStyle ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        التعهدات والضمانات
                        </Text>
                     </View>
   
                     <View style={[styles.ViewStyle]}>
                        <Text style={{fontSize:17,fontWeight:"bold"}} > 
                        أنت تقر وتضمن بأنك سوف:
                        </Text>
                    </View>


                    <View style={[styles.ViewStyle, {paddingRight:"5%"}]}>
                        <Text style={styles.ContentText} > 
                        •	تمتثل لكافة القوانين واللوائح المعمول بها في جمهوريه مصر العربيه.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	تقدم معلومات صحيحة ودقيقة إلى “شحن أب” وتقوم بتحديثها بشكل دوري.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	تراجع وتمتثل لأي إشعارات يتم إرسالها من خلال “شحن أب” فيما يتعلق باستخدامكم للخدمة المقدمة من تطبيق “شحن أب”.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	لن تقوم بتكرار تراخيص من الباطن, أو إصدار,أو نشر, أو نقل, أو توزيع, أو تنفيذ, أو عرض, أو بيع, أو إعادة تصنيف خدمات “شحن أب”, والا فإنك تكون قد نقلت الخدمة أو قمت باستغلالها تجارياً, باستثناء مايسمح به بموجب هذا العقد.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	  لن تستخدم المعلومات، أو المحتوى أو أي بيانات تصل إليها أو تحصل عليها من خلال خدمات “شحن أب” في أي غرض آخر إلا للاستعمال الشخصي وسوف تستخدم التطبيق والخدمة حصراً للأغراض الخاصة بك ولن تبيعها لأي طرف ثالث (بما في ذلك على سبيل المثال لا الحصر تقديم أي خدمة إلى أي شخص آخر). 
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	سوف تستخدم الخدمة أو التطبيق لأغراض مشروعة فقط، ولن تستخدم الخدمات لإرسال أو تخزين أي مواد غير قانونية أو بهدف الاحتيال.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	تلتزم  باعتماد معايير الحفاظ على سلامة المنتجات التي يتم نقلها عبر مركبتك أثناء التوصيل بحيث يتم توصيل الطلبات وهي في حالة صحية سليمة.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	لن تستخدم الخدمة أو التطبيق للتسبب بإيذاء أو مضايقة أو إزعاج أحد ما.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	لن تعرقل التشغيل السليم لتطبيق “شحن أب”.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	لن تحاول إلحاق الضرر بالخدمة أو التطبيق بأي شكل من الأشكال.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	لن تنسخ أو توزع التطبيق أو المحتويات الأخرى دون الحصول على إذن كتابي من “شحن أب”.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	سوف تحافظ على كلمة المرور لحسابك أو أي وسيلة تعريف نقدمها لك وتتيح الدخول إلى حسابك، بشكلٍ آمن وسري.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	سوف تقدم لنا كافة الدلائل التي تثبت هويتك وفقاً لتقدير “شحن أب” الخاص.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	سوف تستخدم فقط أجهزة الاتصال اللاسلكي بالإنترنت أو حساب بيانات الجيل الثالث ( AP ) المصرح لك باستخدامهما .
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	يحق ل” شحن أب” رفض تقديم الخدمة أو استخدام التطبيق دون إبداء أسباب.

                        </Text>
                       
 

                    
                    </View>


                    <View style={[styles.HeaderViewStyle ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        نطاق الترخيص      
                        </Text>
                     </View>



                     <View style={[styles.ViewStyle]}>
                        <Text style={[styles.ContentText , {fontWeight:"bold"}]} > 
                        تمنحك " شحن أب " ترخيص غير حصري، وغير قابل للتحويل، وغير قابل للتنازل، وغير قابل للترخيص من الباطن وغير قابل للإلغاء وذلك للحصول على خدماتنا واستخدامها فقط للغرض الشخصي (ليس لأي أغراض تجارية على سبيل المثال لا الحصر) وفقاً لهذا العقد، لذا يجب عليك:
                        </Text>
                       
                    </View>

                    <View style={[styles.ViewStyle , {paddingRight:"5%"}]}>
                        
                        <Text style={styles.ContentText} > 
                        •	عدم إتاحة الخدمات أوتأجير، أواستئجار أوتخصيص أوإعادة بيع، أو توزيع أو ترخيص من الباطن لهذه الخدمات إلى أي طرف ثالث.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	عدم تعديل، أو اجتزاء، أو ترجمة، أو تلخيص، أو إنشاء عمل فرعي يقوم على فك، أو تنفيذ هندسة عكسية لتصميم تطبيق “شحن أب” أو خلاف ذلك من تحديد أو محاولة تحديد أو محاولة الوصول إلى شفرة المصدر أو التصميم الداخلي للخدمات أو أي نص، أو صور الوسائط المتعددة (صور، صوتيات، ملفات فيديو)،  أو البيانات أو غيرها من المعلومات التي تقدمها “شحن اب  ” أو الطرف الثالث من مقدمي الخدمة.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	عدم حذف، أو تغيير، أو غير ذلك من التعديل على أي حق من حقوق النشر أو غيرها من الإخطارات الرسمية الواردة في الخدمات.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	 عدم تعمد نقل، أو توزيع الخدمات، أو السماح بتحميل الخدمات للاستخدام بخلاف ما هو محدد هنا.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	عدم الإدعاء بمنح الخدمات أو السماح بالوصول إليها لأي شخص غيرك.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	عدم السماح بمشاركة اسم المستخدم/ أو كلمة المرور أو غيرها من مسوغات الوصول إلى خدمات “شحن أب”.
                        </Text>
                        <Text style={styles.ContentText} > 
                        •	وكجزء من سياسة الشحن الخاصة بخدمة شحن أب يحظر على المستخدمين والمندوبين شراء أو توصيل أو إرسال أو تلقي أو استلام الفئات التالية من المواد والمنتجات وما يتعلق بها، ويجب على المندوب التأكد من سلامة أي ارسالية يقوم بها من خلال المنصة.
                        </Text>
                        
                       
                    </View>


                    <View style={[styles.HeaderViewStyle  ]}>
                        <Text style={[styles.headingText]} selectable={true}>
                        للتواصل معنا     
                        </Text>
                     </View>


                     <View style={[styles.ViewStyle]}>
                        <Text style={[styles.ContentText] } > 
                        إذا كان لديك أي أسئلة بشأن شروط مقدم الخدمة هذه، أو الممارسات بهذا التطبيق، أو تعاملاتك مع التطبيق، يمكنكم التواصل معنا من خلال الأتي:                        </Text>
                       
                    </View>
                    <View style={[styles.ViewStyle, {paddingRight:"5%"}]}>
                        <Text style={[styles.ContentText]} > 
                        •	الموقع :  www.shahnapp.com
                        </Text>
                        <Text style={[styles.ContentText]} > 
                        •	 البريد الألكتروني :  info@shahnapp.com     

                        </Text>
                    </View>
               
                </ScrollView>

            </>

        ) 
    }

}

const styles = StyleSheet.create({
    HeaderStyle: {
        height: '8%',
        backgroundColor: "#fbe470",
        flexDirection: 'row',
        paddingTop: "5%",
        paddingLeft: "5%",

        elevation: 7,

    },
    SettingText: {
        fontSize: 20,
        color: "#000",
        marginLeft: "2%",


    },
    HeaderViewStyle: {
        height: height * 0.05,
        backgroundColor: "#fbe470",
        justifyContent: "center",
        paddingRight: "2%",
        marginBottom: "5%"
    },
    headingText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 15,



    },
    ViewStyle: {
        width: width * 0.97,
        marginBottom: "5%",
        paddingLeft: "3%"


    },
    ContentText: {
        fontSize: 15,
        textAlign: 'right',
        marginBottom: "2%",
        


    },
    BoldText: {
        fontWeight: "bold",

    },
    Content_Text_With_Margin_Right: {
        fontSize: 15,
        textAlign: 'right',
        marginBottom: "2%",
        marginRight: "5%"
    },
    TableStyle: {
        width: width * 0.9,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#000",
        flex: 1,
        marginBottom:"5%"
        // justifyContent: "flex-start"
    },
    RightColumnYellow: {
        backgroundColor: "#fbe470",
        width: width * 0.296,
        height: height * 0.1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#000",
        justifyContent: "center",
        paddingRight: "4%"


    },
    LeftColumnYellow: {
        backgroundColor: "#fbe470",
        width: width * 0.596,
        height: height * 0.1,
        justifyContent: "center",
        paddingRight: "4%",
        borderBottomWidth: 1,



    },
    RightColumnWhite: {
        width: width * 0.296,
        // height: height * 0.1,
        borderLeftWidth: 1,
        borderColor: "#000",
        justifyContent: "center",
        paddingRight: "4%",
        borderBottomWidth: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    LeftColumnWhite: {
        width: width * 0.598,
        // height: height * 0.1,

        borderColor: "#000",
        justifyContent: "center",
        paddingRight: "4%",
        borderBottomWidth: 1,
    }
}
)