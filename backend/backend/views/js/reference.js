const contentArray = [
    {
        title: "..../..../..../endpoint1",
        description: "Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        title: "..../..../..../endpoint2",
        description: "Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?consectetur adipiscing elit. Integer vitae metus nunc. Ut mattis ante ut lacinia commodo. Morbi et nisi mauris."
    },
    {
        title: "..../..../..../endpoint3",
        description: "Lorem ipsum doSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?lor sit amet, consectetur adipiscing elit. Fusce consectetur sapien sed ipsum consectetur, id feugiat sapien congue. Aenean vitae ligula eget sem volutpat sollicitudin."
    },
    {
        title: "..../..../..../endpoint4",
        description: "Lorem ipsum dSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?olor sit amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint5",
        description: "Lorem ipsum doSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?lorSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? sit amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint6",
        description: "Lorem ipsum dolor sit amet, conseSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?ctetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint7",
        description: "Lorem ipsum dolor Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?sit amet, consSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?ectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint8",
        description: "Lorem ipsum dolor sitSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint9",
        description: "Lorem ipsum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?dolor sit amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint10",
        description: "Lorem ipsum dolor sit amet, consSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?ectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint11",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?lit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint12",
        description: "Lorem ipsum dolor sit amet, coSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?nsectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint13",
        description: "Lorem ipsum dolor sit amet, conseSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?ctetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint14",
        description: "Lorem ipsum dolSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?or sit amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint15",
        description: "Lorem ipsum dolor Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?sit amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint16",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint17",
        description: "Lorem ipsum dolor Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?sit amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint18",
        description: "Lorem ipsum dolor sit Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint19",
        description: "Lorem ipsum dolor sit Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint20",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint21",
        description: "Lorem ipsum dolor sit Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint22",
        description: "Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint24",
        description: "Lorem ipsum dolor sit amet,Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint25",
        description: "Lorem ipsum dolor sit amet, coSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?nsectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint26",
        description: "Lorem ipsum dolor Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? sit amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint27",
        description: "Lorem ipsum dolor sitSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint28",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint29",
        description: "Lorem ipsum dolor sit aSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?met, consectetur adipiscing elit. Sed aliquam tincidunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    },
    {
        title: "..../..../..../endpoint30",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tinciSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?dunt ligula, ut tristique dolor viverra id. Nam et justo et leo interdum malesuada."
    }
];

document.addEventListener("DOMContentLoaded", function() {
    let listItems = document.querySelectorAll(".item-list li");

    listItems.forEach(function(item, index) {
        item.addEventListener("click", function() {
            let clickedContent = contentArray[index];

            let mainContent = document.getElementById("ref-main-content");
            mainContent.innerHTML = "<p id=\"ref-main-api-route\">" + clickedContent.title + "</p><p id=\"ref-main-api-desc\">" + clickedContent.description + "</p>";
        });
    });

    let langButtons = document.querySelectorAll('.lang-btn');
    let codeDisplay = document.getElementById('code-display');

    function updateCodeDisplay(language) {
        let code = "";

        switch (language) {
            case 'cpp':
                code = "// C++ code to print BFS traversal from a given\n" +
                    "// source vertex\n" +
                    "\n" +
                    "#include <bits/stdc++.h>\n" +
                    "using namespace std;\n" +
                    "\n" +
                    "// This class represents a directed graph using\n" +
                    "// adjacency list representation\n" +
                    "class Graph {\n" +
                    "\n" +
                    "\t// No. of vertices\n" +
                    "\tint V;\n" +
                    "\n" +
                    "\t// Pointer to an array containing adjacency lists\n" +
                    "\tvector<list<int> > adj;\n" +
                    "\n" +
                    "public:\n" +
                    "\t// Constructor\n" +
                    "\tGraph(int V);\n" +
                    "\n" +
                    "\t// Function to add an edge to graph\n" +
                    "\tvoid addEdge(int v, int w);\n" +
                    "\n" +
                    "\t// Prints BFS traversal from a given source s\n" +
                    "\tvoid BFS(int s);\n" +
                    "};\n" +
                    "\n" +
                    "Graph::Graph(int V)\n" +
                    "{\n" +
                    "\tthis->V = V;\n" +
                    "\tadj.resize(V);\n" +
                    "}\n" +
                    "\n" +
                    "void Graph::addEdge(int v, int w)\n" +
                    "{\n" +
                    "\t// Add w to v’s list.\n" +
                    "\tadj[v].push_back(w);\n" +
                    "}\n" +
                    "\n" +
                    "void Graph::BFS(int s)\n" +
                    "{\n" +
                    "\t// Mark all the vertices as not visited\n" +
                    "\tvector<bool> visited;\n" +
                    "\tvisited.resize(V, false);\n" +
                    "\n" +
                    "\t// Create a queue for BFS\n" +
                    "\tlist<int> queue;\n" +
                    "\n" +
                    "\t// Mark the current node as visited and enqueue it\n" +
                    "\tvisited[s] = true;\n" +
                    "\tqueue.push_back(s);\n" +
                    "\n" +
                    "\twhile (!queue.empty()) {\n" +
                    "\n" +
                    "\t\t// Dequeue a vertex from queue and print it\n" +
                    "\t\ts = queue.front();\n" +
                    "\t\tcout << s << \" \";\n" +
                    "\t\tqueue.pop_front();\n" +
                    "\n" +
                    "\t\t// Get all adjacent vertices of the dequeued\n" +
                    "\t\t// vertex s.\n" +
                    "\t\t// If an adjacent has not been visited,\n" +
                    "\t\t// then mark it visited and enqueue it\n" +
                    "\t\tfor (auto adjacent : adj[s]) {\n" +
                    "\t\t\tif (!visited[adjacent]) {\n" +
                    "\t\t\t\tvisited[adjacent] = true;\n" +
                    "\t\t\t\tqueue.push_back(adjacent);\n" +
                    "\t\t\t}\n" +
                    "\t\t}\n" +
                    "\t}\n" +
                    "}\n" +
                    "\n" +
                    "// Driver code\n" +
                    "int main()\n" +
                    "{\n" +
                    "\t// Create a graph given in the above diagram\n" +
                    "\tGraph g(4);\n" +
                    "\tg.addEdge(0, 1);\n" +
                    "\tg.addEdge(0, 2);\n" +
                    "\tg.addEdge(1, 2);\n" +
                    "\tg.addEdge(2, 0);\n" +
                    "\tg.addEdge(2, 3);\n" +
                    "\tg.addEdge(3, 3);\n" +
                    "\n" +
                    "\tcout << \"Following is Breadth First Traversal \"\n" +
                    "\t\t<< \"(starting from vertex 2) \\n\";\n" +
                    "\tg.BFS(2);\n" +
                    "\n" +
                    "\treturn 0;\n" +
                    "}\n";
                break;
            case 'java':
                code = "// Java program to print BFS traversal from a given source\n" +
                    "// vertex. BFS(int s) traverses vertices reachable from s.\n" +
                    "\n" +
                    "import java.io.*;\n" +
                    "import java.util.*;\n" +
                    "\n" +
                    "// This class represents a directed graph using adjacency\n" +
                    "// list representation\n" +
                    "class Graph {\n" +
                    "\n" +
                    "\t// No. of vertices\n" +
                    "\tprivate int V;\n" +
                    "\n" +
                    "\t// Adjacency Lists\n" +
                    "\tprivate LinkedList<Integer> adj[];\n" +
                    "\n" +
                    "\t// Constructor\n" +
                    "\tGraph(int v)\n" +
                    "\t{\n" +
                    "\t\tV = v;\n" +
                    "\t\tadj = new LinkedList[v];\n" +
                    "\t\tfor (int i = 0; i < v; ++i)\n" +
                    "\t\t\tadj[i] = new LinkedList();\n" +
                    "\t}\n" +
                    "\n" +
                    "\t// Function to add an edge into the graph\n" +
                    "\tvoid addEdge(int v, int w) { adj[v].add(w); }\n" +
                    "\n" +
                    "\t// prints BFS traversal from a given source s\n" +
                    "\tvoid BFS(int s)\n" +
                    "\t{\n" +
                    "\t\t// Mark all the vertices as not visited(By default\n" +
                    "\t\t// set as false)\n" +
                    "\t\tboolean visited[] = new boolean[V];\n" +
                    "\n" +
                    "\t\t// Create a queue for BFS\n" +
                    "\t\tLinkedList<Integer> queue\n" +
                    "\t\t\t= new LinkedList<Integer>();\n" +
                    "\n" +
                    "\t\t// Mark the current node as visited and enqueue it\n" +
                    "\t\tvisited[s] = true;\n" +
                    "\t\tqueue.add(s);\n" +
                    "\n" +
                    "\t\twhile (queue.size() != 0) {\n" +
                    "\n" +
                    "\t\t\t// Dequeue a vertex from queue and print it\n" +
                    "\t\t\ts = queue.poll();\n" +
                    "\t\t\tSystem.out.print(s + \" \");\n" +
                    "\n" +
                    "\t\t\t// Get all adjacent vertices of the dequeued\n" +
                    "\t\t\t// vertex s.\n" +
                    "\t\t\t// If an adjacent has not been visited,\n" +
                    "\t\t\t// then mark it visited and enqueue it\n" +
                    "\t\t\tIterator<Integer> i = adj[s].listIterator();\n" +
                    "\t\t\twhile (i.hasNext()) {\n" +
                    "\t\t\t\tint n = i.next();\n" +
                    "\t\t\t\tif (!visited[n]) {\n" +
                    "\t\t\t\t\tvisited[n] = true;\n" +
                    "\t\t\t\t\tqueue.add(n);\n" +
                    "\t\t\t\t}\n" +
                    "\t\t\t}\n" +
                    "\t\t}\n" +
                    "\t}\n" +
                    "\n" +
                    "\t// Driver code\n" +
                    "\tpublic static void main(String args[])\n" +
                    "\t{\n" +
                    "\t\tGraph g = new Graph(4);\n" +
                    "\t\tg.addEdge(0, 1);\n" +
                    "\t\tg.addEdge(0, 2);\n" +
                    "\t\tg.addEdge(1, 2);\n" +
                    "\t\tg.addEdge(2, 0);\n" +
                    "\t\tg.addEdge(2, 3);\n" +
                    "\t\tg.addEdge(3, 3);\n" +
                    "\n" +
                    "\t\tSystem.out.println(\n" +
                    "\t\t\t\"Following is Breadth First Traversal \"\n" +
                    "\t\t\t+ \"(starting from vertex 2)\");\n" +
                    "\n" +
                    "\t\tg.BFS(2);\n" +
                    "\t}\n" +
                    "}\n";
                break;
            case 'csharp':
                code = "// C# program to print BFS traversal from a given source\n" +
                    "// vertex. BFS(int s) traverses vertices reachable from s.\n" +
                    "\n" +
                    "using System;\n" +
                    "using System.Collections.Generic;\n" +
                    "using System.Linq;\n" +
                    "using System.Text;\n" +
                    "\n" +
                    "// This class represents a directed graph\n" +
                    "// using adjacency list representation\n" +
                    "class Graph {\n" +
                    "\n" +
                    "\t// No. of vertices\n" +
                    "\tprivate int _V;\n" +
                    "\n" +
                    "\t// Adjacency Lists\n" +
                    "\tLinkedList<int>[] _adj;\n" +
                    "\n" +
                    "\tpublic Graph(int V)\n" +
                    "\t{\n" +
                    "\t\t_adj = new LinkedList<int>[ V ];\n" +
                    "\t\tfor (int i = 0; i < _adj.Length; i++) {\n" +
                    "\t\t\t_adj[i] = new LinkedList<int>();\n" +
                    "\t\t}\n" +
                    "\t\t_V = V;\n" +
                    "\t}\n" +
                    "\n" +
                    "\t// Function to add an edge into the graph\n" +
                    "\tpublic void AddEdge(int v, int w)\n" +
                    "\t{\n" +
                    "\t\t_adj[v].AddLast(w);\n" +
                    "\t}\n" +
                    "\n" +
                    "\t// Prints BFS traversal from a given source s\n" +
                    "\tpublic void BFS(int s)\n" +
                    "\t{\n" +
                    "\n" +
                    "\t\t// Mark all the vertices as not\n" +
                    "\t\t// visited(By default set as false)\n" +
                    "\t\tbool[] visited = new bool[_V];\n" +
                    "\t\tfor (int i = 0; i < _V; i++)\n" +
                    "\t\t\tvisited[i] = false;\n" +
                    "\n" +
                    "\t\t// Create a queue for BFS\n" +
                    "\t\tLinkedList<int> queue = new LinkedList<int>();\n" +
                    "\n" +
                    "\t\t// Mark the current node as\n" +
                    "\t\t// visited and enqueue it\n" +
                    "\t\tvisited[s] = true;\n" +
                    "\t\tqueue.AddLast(s);\n" +
                    "\n" +
                    "\t\twhile (queue.Any()) {\n" +
                    "\n" +
                    "\t\t\t// Dequeue a vertex from queue\n" +
                    "\t\t\t// and print it\n" +
                    "\t\t\ts = queue.First();\n" +
                    "\t\t\tConsole.Write(s + \" \");\n" +
                    "\t\t\tqueue.RemoveFirst();\n" +
                    "\n" +
                    "\t\t\t// Get all adjacent vertices of the\n" +
                    "\t\t\t// dequeued vertex s.\n" +
                    "\t\t\t// If an adjacent has not been visited,\n" +
                    "\t\t\t// then mark it visited and enqueue it\n" +
                    "\t\t\tLinkedList<int> list = _adj[s];\n" +
                    "\n" +
                    "\t\t\tforeach(var val in list)\n" +
                    "\t\t\t{\n" +
                    "\t\t\t\tif (!visited[val]) {\n" +
                    "\t\t\t\t\tvisited[val] = true;\n" +
                    "\t\t\t\t\tqueue.AddLast(val);\n" +
                    "\t\t\t\t}\n" +
                    "\t\t\t}\n" +
                    "\t\t}\n" +
                    "\t}\n" +
                    "\n" +
                    "\t// Driver code\n" +
                    "\tstatic void Main(string[] args)\n" +
                    "\t{\n" +
                    "\t\tGraph g = new Graph(4);\n" +
                    "\t\tg.AddEdge(0, 1);\n" +
                    "\t\tg.AddEdge(0, 2);\n" +
                    "\t\tg.AddEdge(1, 2);\n" +
                    "\t\tg.AddEdge(2, 0);\n" +
                    "\t\tg.AddEdge(2, 3);\n" +
                    "\t\tg.AddEdge(3, 3);\n" +
                    "\n" +
                    "\t\tConsole.Write(\"Following is Breadth First \"\n" +
                    "\t\t\t\t\t+ \"Traversal(starting from \"\n" +
                    "\t\t\t\t\t+ \"vertex 2) \\n\");\n" +
                    "\t\tg.BFS(2);\n" +
                    "\t}\n" +
                    "}\n";
                break;
            case 'python':
                code = "# Python3 Program to print BFS traversal\n" +
                    "# from a given source vertex. BFS(int s)\n" +
                    "# traverses vertices reachable from s.\n" +
                    "\n" +
                    "from collections import defaultdict\n" +
                    "\n" +
                    "\n" +
                    "# This class represents a directed graph\n" +
                    "# using adjacency list representation\n" +
                    "class Graph:\n" +
                    "\n" +
                    "\t# Constructor\n" +
                    "\tdef __init__(self):\n" +
                    "\n" +
                    "\t\t# Default dictionary to store graph\n" +
                    "\t\tself.graph = defaultdict(list)\n" +
                    "\n" +
                    "\t# Function to add an edge to graph\n" +
                    "\tdef addEdge(self, u, v):\n" +
                    "\t\tself.graph[u].append(v)\n" +
                    "\n" +
                    "\t# Function to print a BFS of graph\n" +
                    "\tdef BFS(self, s):\n" +
                    "\n" +
                    "\t\t# Mark all the vertices as not visited\n" +
                    "\t\tvisited = [False] * (max(self.graph) + 1)\n" +
                    "\n" +
                    "\t\t# Create a queue for BFS\n" +
                    "\t\tqueue = []\n" +
                    "\n" +
                    "\t\t# Mark the source node as\n" +
                    "\t\t# visited and enqueue it\n" +
                    "\t\tqueue.append(s)\n" +
                    "\t\tvisited[s] = True\n" +
                    "\n" +
                    "\t\twhile queue:\n" +
                    "\n" +
                    "\t\t\t# Dequeue a vertex from\n" +
                    "\t\t\t# queue and print it\n" +
                    "\t\t\ts = queue.pop(0)\n" +
                    "\t\t\tprint(s, end=\" \")\n" +
                    "\n" +
                    "\t\t\t# Get all adjacent vertices of the\n" +
                    "\t\t\t# dequeued vertex s.\n" +
                    "\t\t\t# If an adjacent has not been visited,\n" +
                    "\t\t\t# then mark it visited and enqueue it\n" +
                    "\t\t\tfor i in self.graph[s]:\n" +
                    "\t\t\t\tif visited[i] == False:\n" +
                    "\t\t\t\t\tqueue.append(i)\n" +
                    "\t\t\t\t\tvisited[i] = True\n" +
                    "\n" +
                    "\n" +
                    "# Driver code\n" +
                    "if __name__ == '__main__':\n" +
                    "\n" +
                    "\t# Create a graph given in\n" +
                    "\t# the above diagram\n" +
                    "\tg = Graph()\n" +
                    "\tg.addEdge(0, 1)\n" +
                    "\tg.addEdge(0, 2)\n" +
                    "\tg.addEdge(1, 2)\n" +
                    "\tg.addEdge(2, 0)\n" +
                    "\tg.addEdge(2, 3)\n" +
                    "\tg.addEdge(3, 3)\n" +
                    "\n" +
                    "\tprint(\"Following is Breadth First Traversal\"\n" +
                    "\t\t\" (starting from vertex 2)\")\n" +
                    "\tg.BFS(2)\n";
                break;
            case 'javascript':
                code = "// Javacript Program to print BFS traversal from a given\n" +
                    "// source vertex. BFS(int s) traverses vertices\n" +
                    "// reachable from s.\n" +
                    "\t\n" +
                    "\t\n" +
                    "// This class represents a directed graph using\n" +
                    "// adjacency list representation\n" +
                    "class Graph\n" +
                    "{\n" +
                    "\t// Constructor\n" +
                    "\tconstructor(v)\n" +
                    "\t{\n" +
                    "\t\tthis.V = v;\n" +
                    "\t\tthis.adj = new Array(v);\n" +
                    "\t\tfor(let i = 0; i < v; i++)\n" +
                    "\t\t\tthis.adj[i] = [];\n" +
                    "\t}\n" +
                    "\t\t\n" +
                    "\t// Function to add an edge into the graph\n" +
                    "\taddEdge(v, w)\n" +
                    "\t{\n" +
                    "\t\t// Add w to v's list.\n" +
                    "\t\tthis.adj[v].push(w);\n" +
                    "\t}\n" +
                    "\t\t\n" +
                    "\t// Prints BFS traversal from a given source s\n" +
                    "\tBFS(s)\n" +
                    "\t{\n" +
                    "\t\t// Mark all the vertices as not visited(By default\n" +
                    "\t\t// set as false)\n" +
                    "\t\tlet visited = new Array(this.V);\n" +
                    "\t\tfor(let i = 0; i < this.V; i++)\n" +
                    "\t\t\tvisited[i] = false;\n" +
                    "\t\t\t\n" +
                    "\t\t// Create a queue for BFS\n" +
                    "\t\tlet queue=[];\n" +
                    "\t\t\t\n" +
                    "\t\t// Mark the current node as visited and enqueue it\n" +
                    "\t\tvisited[s]=true;\n" +
                    "\t\tqueue.push(s);\n" +
                    "\t\t\t\n" +
                    "\t\twhile(queue.length>0)\n" +
                    "\t\t{\n" +
                    "\t\t\t// Dequeue a vertex from queue and print it\n" +
                    "\t\t\ts = queue[0];\n" +
                    "\t\t\tconsole.log(s+\" \");\n" +
                    "\t\t\tqueue.shift();\n" +
                    "\t\t\t\t\n" +
                    "\t\t\t// Get all adjacent vertices of the dequeued\n" +
                    "\t\t\t// vertex s. \n" +
                    "\t\t\t// If an adjacent has not been visited,\n" +
                    "\t\t\t// then mark it visited and enqueue it\n" +
                    "\t\t\tthis.adj[s].forEach((adjacent,i) => { \n" +
                    "\t\t\t\tif(!visited[adjacent])\n" +
                    "\t\t\t\t{\n" +
                    "\t\t\t\t\tvisited[adjacent]=true;\n" +
                    "\t\t\t\t\tqueue.push(adjacent);\n" +
                    "\t\t\t\t}\n" +
                    "\t\t\t});\n" +
                    "\t\t}\n" +
                    "\t}\n" +
                    "}\n" +
                    "\t\n" +
                    "// Driver program to test methods of graph class\n" +
                    "\t\n" +
                    "\t// Create a graph given in the above diagram\n" +
                    "\tg = new Graph(4);\n" +
                    "\tg.addEdge(0, 1);\n" +
                    "\tg.addEdge(0, 2);\n" +
                    "\tg.addEdge(1, 2);\n" +
                    "\tg.addEdge(2, 0);\n" +
                    "\tg.addEdge(2, 3);\n" +
                    "\tg.addEdge(3, 3);\n" +
                    "\t\n" +
                    "\tconsole.log(\"Following is Breadth First Traversal \" +\n" +
                    "\t\t\t\t\"(starting from vertex 2) \");\n" +
                    "\t\n" +
                    "\tg.BFS(2);\n" +
                    "\t\n";
                break;
            default:
                code = "// C++ code to print BFS traversal from a given\n" +
                    "// source vertex\n" +
                    "\n" +
                    "#include <bits/stdc++.h>\n" +
                    "using namespace std;\n" +
                    "\n" +
                    "// This class represents a directed graph using\n" +
                    "// adjacency list representation\n" +
                    "class Graph {\n" +
                    "\n" +
                    "\t// No. of vertices\n" +
                    "\tint V;\n" +
                    "\n" +
                    "\t// Pointer to an array containing adjacency lists\n" +
                    "\tvector<list<int> > adj;\n" +
                    "\n" +
                    "public:\n" +
                    "\t// Constructor\n" +
                    "\tGraph(int V);\n" +
                    "\n" +
                    "\t// Function to add an edge to graph\n" +
                    "\tvoid addEdge(int v, int w);\n" +
                    "\n" +
                    "\t// Prints BFS traversal from a given source s\n" +
                    "\tvoid BFS(int s);\n" +
                    "};\n" +
                    "\n" +
                    "Graph::Graph(int V)\n" +
                    "{\n" +
                    "\tthis->V = V;\n" +
                    "\tadj.resize(V);\n" +
                    "}\n" +
                    "\n" +
                    "void Graph::addEdge(int v, int w)\n" +
                    "{\n" +
                    "\t// Add w to v’s list.\n" +
                    "\tadj[v].push_back(w);\n" +
                    "}\n" +
                    "\n" +
                    "void Graph::BFS(int s)\n" +
                    "{\n" +
                    "\t// Mark all the vertices as not visited\n" +
                    "\tvector<bool> visited;\n" +
                    "\tvisited.resize(V, false);\n" +
                    "\n" +
                    "\t// Create a queue for BFS\n" +
                    "\tlist<int> queue;\n" +
                    "\n" +
                    "\t// Mark the current node as visited and enqueue it\n" +
                    "\tvisited[s] = true;\n" +
                    "\tqueue.push_back(s);\n" +
                    "\n" +
                    "\twhile (!queue.empty()) {\n" +
                    "\n" +
                    "\t\t// Dequeue a vertex from queue and print it\n" +
                    "\t\ts = queue.front();\n" +
                    "\t\tcout << s << \" \";\n" +
                    "\t\tqueue.pop_front();\n" +
                    "\n" +
                    "\t\t// Get all adjacent vertices of the dequeued\n" +
                    "\t\t// vertex s.\n" +
                    "\t\t// If an adjacent has not been visited,\n" +
                    "\t\t// then mark it visited and enqueue it\n" +
                    "\t\tfor (auto adjacent : adj[s]) {\n" +
                    "\t\t\tif (!visited[adjacent]) {\n" +
                    "\t\t\t\tvisited[adjacent] = true;\n" +
                    "\t\t\t\tqueue.push_back(adjacent);\n" +
                    "\t\t\t}\n" +
                    "\t\t}\n" +
                    "\t}\n" +
                    "}\n" +
                    "\n" +
                    "// Driver code\n" +
                    "int main()\n" +
                    "{\n" +
                    "\t// Create a graph given in the above diagram\n" +
                    "\tGraph g(4);\n" +
                    "\tg.addEdge(0, 1);\n" +
                    "\tg.addEdge(0, 2);\n" +
                    "\tg.addEdge(1, 2);\n" +
                    "\tg.addEdge(2, 0);\n" +
                    "\tg.addEdge(2, 3);\n" +
                    "\tg.addEdge(3, 3);\n" +
                    "\n" +
                    "\tcout << \"Following is Breadth First Traversal \"\n" +
                    "\t\t<< \"(starting from vertex 2) \\n\";\n" +
                    "\tg.BFS(2);\n" +
                    "\n" +
                    "\treturn 0;\n" +
                    "}\n";
        }

        codeDisplay.textContent = code;

        langButtons.forEach(btn => {
            btn.style.border = '0.2px solid transparent';
        });

        document.querySelector('[data-tab="' + language + '"]').style.border = '0.2px solid black';
        document.querySelector('[data-tab="' + language + '"]').style.borderBottom = '0.2px solid transparent';
    }

    updateCodeDisplay('cpp');
    langButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let language = this.getAttribute('data-tab');
            updateCodeDisplay(language);
        });
    });

    const searchInput = document.querySelector('#ref-sidebar-apis .search-container input');
    const apiListItems = document.querySelectorAll('#ref-sidebar-apis .item-list li');

    searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase();
        apiListItems.forEach(item => {
            const apiName = item.textContent.toLowerCase();
            if (apiName.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
